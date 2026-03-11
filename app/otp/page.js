'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import '../globals.css'

export default function OTP() {
  const router = useRouter()
  const [digits, setDigits] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(59)
  const inputs = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return
    const newDigits = [...digits]
    newDigits[index] = value
    setDigits(newDigits)
    if (value && index < 5) {
      inputs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1].focus()
    }
  }

  const isComplete = digits.every((d) => d !== '')

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div className="screen" style={{ paddingTop: 80 }}>

        {/* Back */}
        <div
          onClick={() => router.push('/phone')}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '2px solid var(--cream2)',
            background: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 16,
            color: 'var(--char2)', marginBottom: 28
          }}
        >
          ←
        </div>

        {/* Step */}
        <div style={{
          fontSize: 11, color: 'var(--gray2)',
          letterSpacing: 2, textTransform: 'uppercase',
          fontWeight: 600, marginBottom: 20
        }}>
          Step 1 of 4 — OTP
        </div>

        {/* Icon */}
        <div style={{
          width: 72, height: 72, borderRadius: 24,
          background: 'linear-gradient(135deg, #F0FFF4, #C6F6D5)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 36,
          marginBottom: 20
        }}>
          ✉️
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 26,
          color: 'var(--char)', marginBottom: 6
        }}>
          Check your<br />
          <span style={{ color: 'var(--red)' }}>messages</span>
        </div>

        <div style={{
          fontSize: 14, color: 'var(--gray2)', marginBottom: 8
        }}>
          6-digit code sent to your phone
        </div>

        {/* OTP boxes */}
        <div style={{
          display: 'flex', gap: 12,
          margin: '28px 0', justifyContent: 'center'
        }}>
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              type="tel"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              style={{
                width: 52, height: 60,
                background: digit ? 'rgba(45,106,79,0.05)' : 'var(--gray)',
                border: `2px solid ${digit ? 'var(--green)' : 'var(--cream2)'}`,
                borderRadius: 14,
                textAlign: 'center',
                fontSize: 24, fontWeight: 700,
                fontFamily: 'Georgia, serif',
                color: 'var(--red)', outline: 'none',
                transition: 'all 0.2s'
              }}
            />
          ))}
        </div>

        {/* Timer */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 8, marginBottom: 32
        }}>
          <span style={{ fontSize: 13, color: 'var(--gray2)' }}>
            Didn't receive it?
          </span>
          <span style={{
            fontSize: 13, color: 'var(--red)',
            fontWeight: 600, cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Resend
          </span>
          <span style={{
            fontSize: 13, color: 'var(--gold)', fontWeight: 700
          }}>
            0:{String(timer).padStart(2, '0')}
          </span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Button */}
        <button
          className="btn-red"
          disabled={!isComplete}
          onClick={() => router.push('/profile-build')}
          style={{
            opacity: isComplete ? 1 : 0.5,
            cursor: isComplete ? 'pointer' : 'not-allowed'
          }}
        >
          Verify & Continue
        </button>

        <div style={{
          textAlign: 'center', marginTop: 12,
          fontSize: 12, color: 'var(--gray2)'
        }}>
          Demo: enter any 6 digits to continue
        </div>

      </div>
    </div>
  )
}