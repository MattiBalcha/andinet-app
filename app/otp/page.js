'use client'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import '../globals.css'

export default function OTP() {
  const router = useRouter()
  const [digits, setDigits] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [resent, setResent] = useState(false)
  const inputs = useRef([])

  useEffect(() => {
    const stored = localStorage.getItem('fiqir_email')
    if (stored) setEmail(stored)
  }, [])

  const handleChange = (i, val) => {
    if (!/^\d*$/.test(val)) return
    const newDigits = [...digits]
    newDigits[i] = val.slice(-1)
    setDigits(newDigits)
    if (val && i < 5) inputs.current[i + 1]?.focus()
    if (newDigits.every((d) => d !== '')) {
      verifyCode(newDigits.join(''))
    }
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus()
    }
  }

  const verifyCode = async (code) => {
    if (!email) { setError('Email not found. Go back and try again.'); return }
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: 'email'
      })
      if (error) throw error
      router.push('/profile-build')
    } catch (err) {
      setError('Invalid code. Please try again.')
      setDigits(['', '', '', '', '', ''])
      inputs.current[0]?.focus()
    } finally {
      setLoading(false)
    }
  }

  const resendCode = async () => {
    if (!email) return
    await supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } })
    setResent(true)
    setTimeout(() => setResent(false), 3000)
  }

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 32px' }}>

        {/* Back */}
        <div
          onClick={() => router.push('/phone')}
          style={{
            marginTop: 52, marginBottom: 32,
            fontSize: 22, cursor: 'pointer',
            color: 'var(--red)', width: 36
          }}
        >
          ←
        </div>

        {/* Icon */}
        <div style={{
          width: 64, height: 64, borderRadius: 20,
          background: 'linear-gradient(135deg, var(--red), #A02020)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 28,
          marginBottom: 24,
          boxShadow: '0 8px 24px rgba(139,26,26,0.25)'
        }}>
          🔐
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 26, fontWeight: 700,
          color: 'var(--char)', marginBottom: 8
        }}>
          Check your email
        </div>
        <div style={{
          fontSize: 14, color: 'var(--gray2)',
          lineHeight: 1.6, marginBottom: 32
        }}>
          We sent a 6-digit code to{' '}
          <span style={{ color: 'var(--red)', fontWeight: 600 }}>
            {email || 'your email'}
          </span>
        </div>

        {/* OTP boxes */}
        <div style={{
          display: 'flex', gap: 10,
          justifyContent: 'center', marginBottom: 16
        }}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              maxLength={1}
              inputMode="numeric"
              style={{
                width: 46, height: 56,
                borderRadius: 14, textAlign: 'center',
                fontSize: 24, fontWeight: 700,
                border: `2px solid ${d ? 'var(--red)' : 'var(--cream2)'}`,
                background: d ? '#FFF5F5' : 'white',
                color: 'var(--char)', outline: 'none',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
                boxShadow: d ? '0 2px 8px rgba(139,26,26,0.12)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{
            fontSize: 13, color: 'var(--red)',
            textAlign: 'center', marginBottom: 12
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{
            fontSize: 13, color: 'var(--gray2)',
            textAlign: 'center', marginBottom: 12
          }}>
            Verifying...
          </div>
        )}

        {/* Resend */}
        <div style={{
          textAlign: 'center', fontSize: 13,
          color: 'var(--gray2)', marginTop: 8
        }}>
          Didn't get it?{' '}
          <span
            onClick={resendCode}
            style={{
              color: resent ? 'var(--green)' : 'var(--red)',
              fontWeight: 600, cursor: 'pointer'
            }}
          >
            {resent ? '✓ Code sent!' : 'Resend code'}
          </span>
        </div>

      </div>
    </div>
  )
}