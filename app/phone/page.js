'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import '../globals.css'

export default function Phone() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSend = async () => {
    const cleaned = email.trim().toLowerCase()
    if (!cleaned.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: cleaned,
        options: { 
          shouldCreateUser: true,
          emailRedirectTo: 'https://andinet-app.vercel.app/discover'
        }
      })
      if (error) throw error
      localStorage.setItem('fiqir_email', cleaned)
      router.push('/otp')
    } catch (err) {
      setError(err.message || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 32px' }}>

        <div
          onClick={() => router.push('/language')}
          style={{
            marginTop: 52, marginBottom: 32,
            fontSize: 22, cursor: 'pointer',
            color: 'var(--red)', width: 36
          }}
        >
          ←
        </div>

        <div style={{
          width: 64, height: 64, borderRadius: 20,
          background: 'linear-gradient(135deg, var(--red), #A02020)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 28,
          marginBottom: 24,
          boxShadow: '0 8px 24px rgba(139,26,26,0.25)'
        }}>
          ✉️
        </div>

        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 26, fontWeight: 700,
          color: 'var(--char)', marginBottom: 8
        }}>
          Enter your email
        </div>
        <div style={{
          fontSize: 14, color: 'var(--gray2)',
          lineHeight: 1.6, marginBottom: 32
        }}>
          We'll send you a 6-digit code to verify your identity
        </div>

        <div style={{
          background: 'white', borderRadius: 16,
          border: '2px solid var(--cream2)',
          display: 'flex', alignItems: 'center',
          padding: '0 16px', marginBottom: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
        }}>
          <span style={{ fontSize: 20, marginRight: 12 }}>✉️</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="yourname@email.com"
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 16, padding: '16px 0',
              fontFamily: 'inherit', color: 'var(--char)',
              background: 'transparent'
            }}
          />
        </div>

        {error && (
          <div style={{
            fontSize: 13, color: 'var(--red)',
            marginBottom: 12, paddingLeft: 4
          }}>
            ⚠️ {error}
          </div>
        )}

        <div style={{
          fontSize: 12, color: 'var(--gray2)',
          marginBottom: 28, paddingLeft: 4,
          lineHeight: 1.5
        }}>
          🔒 We never share your email with anyone
        </div>

        <button
          className="btn-red"
          onClick={handleSend}
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Sending code...' : 'Send Verification Code →'}
        </button>

        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 12, margin: '24px 0'
        }}>
          <div style={{ flex: 1, height: 1, background: 'var(--gray)' }} />
          <span style={{ fontSize: 12, color: 'var(--gray2)' }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: 'var(--gray)' }} />
        </div>

        <button style={{
          width: '100%', padding: 15,
          borderRadius: 16, background: 'white',
          border: '1.5px solid var(--cream2)',
          fontSize: 14, fontWeight: 600,
          color: 'var(--char2)', cursor: 'pointer',
          fontFamily: 'inherit',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          🌐 Continue with Google
        </button>

      </div>
    </div>
  )
}