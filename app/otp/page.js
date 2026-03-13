'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import '../globals.css'

export default function OTP() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('fiqir_email')
    if (stored) setEmail(stored)
  }, [])

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div style={{
        flex: 1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        textAlign: 'center'
      }}>

        <div style={{
          width: 80, height: 80, borderRadius: 24,
          background: 'linear-gradient(135deg, var(--red), #A02020)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 36,
          marginBottom: 28,
          boxShadow: '0 8px 24px rgba(139,26,26,0.25)'
        }}>
          ✉️
        </div>

        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 26, fontWeight: 700,
          color: 'var(--char)', marginBottom: 12
        }}>
          Check your email
        </div>

        <div style={{
          fontSize: 14, color: 'var(--gray2)',
          lineHeight: 1.7, marginBottom: 32
        }}>
          We sent a login link to{' '}
          <span style={{
            color: 'var(--red)', fontWeight: 600,
            display: 'block', marginTop: 4
          }}>
            {email || 'your email'}
          </span>
        </div>

        <div style={{
          background: 'white', borderRadius: 20,
          padding: '20px 24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1.5px solid var(--cream2)',
          marginBottom: 32, width: '100%'
        }}>
          {[
            { num: '1', text: 'Open your email app' },
            { num: '2', text: 'Find the email from Fiqir' },
            { num: '3', text: 'Click the "Log In" button' },
            { num: '4', text: "You're in! 🎉" },
          ].map((step) => (
            <div key={step.num} style={{
              display: 'flex', alignItems: 'center',
              gap: 14, marginBottom: 14,
              paddingBottom: 14,
              borderBottom: step.num !== '4' ? '1px solid var(--gray)' : 'none'
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--red), #A02020)',
                color: 'white', fontSize: 13, fontWeight: 700,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0
              }}>
                {step.num}
              </div>
              <div style={{
                fontSize: 14, color: 'var(--char2)',
                fontWeight: 500
              }}>
                {step.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          fontSize: 13, color: 'var(--gray2)',
          marginBottom: 24
        }}>
          Didn't get it? Check spam or{' '}
          <span
            onClick={() => router.push('/phone')}
            style={{
              color: 'var(--red)', fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            try again
          </span>
        </div>

        <button
          onClick={() => router.push('/phone')}
          style={{
            width: '100%', padding: 15,
            borderRadius: 16, background: 'white',
            border: '1.5px solid var(--cream2)',
            fontSize: 14, fontWeight: 600,
            color: 'var(--char2)', cursor: 'pointer',
            fontFamily: 'inherit',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
        >
          ← Use a different email
        </button>

      </div>
    </div>
  )
}