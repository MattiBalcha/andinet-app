'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

export default function Phone() {
  const router = useRouter()
  const [phone, setPhone] = useState('')

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div className="screen" style={{ paddingTop: 80 }}>

        {/* Back button */}
        <div
          onClick={() => router.push('/language')}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '2px solid var(--cream2)',
            background: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 16,
            color: 'var(--char2)', marginBottom: 28,
            width: 'fit-content'
          }}
        >
          ←
        </div>

        {/* Step indicator */}
        <div style={{
          fontSize: 11, color: 'var(--gray2)',
          letterSpacing: 2, textTransform: 'uppercase',
          fontWeight: 600, marginBottom: 20
        }}>
          Step 1 of 4 — Verification
        </div>

        {/* Icon */}
        <div style={{
          width: 72, height: 72, borderRadius: 24,
          background: 'linear-gradient(135deg, #FFF0F0, #FFD6D6)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 36,
          marginBottom: 20
        }}>
          📱
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 26,
          color: 'var(--char)', marginBottom: 6
        }}>
          Enter your<br />
          <span style={{ color: 'var(--red)' }}>phone number</span>
        </div>

        <div style={{
          fontSize: 14, color: 'var(--gray2)',
          marginBottom: 28, lineHeight: 1.6
        }}>
          We'll send a verification code. No spam, ever.
        </div>

        {/* Phone input */}
        <label className="label">Phone Number</label>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <select style={{
            background: 'var(--gray)',
            border: '2px solid var(--cream2)',
            borderRadius: 14, padding: '14px 12px',
            fontSize: 14, color: 'var(--char)',
            fontFamily: 'inherit', width: 90, outline: 'none'
          }}>
            <option>🇺🇸 +1</option>
            <option>🇪🇹 +251</option>
            <option>🇪🇷 +291</option>
            <option>🇬🇧 +44</option>
          </select>
          <input
            type="tel"
            className="input"
            placeholder="(555) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ flex: 1, letterSpacing: 1 }}
          />
        </div>

        {/* Note */}
        <div style={{
          fontSize: 12, color: 'var(--gray2)',
          lineHeight: 1.6, marginBottom: 32,
          padding: '12px 16px',
          background: 'var(--gray)',
          borderRadius: 12,
          borderLeft: '3px solid var(--gold)'
        }}>
          🔒 Your number is only used for verification and will never appear on your profile.
        </div>

        <div style={{ flex: 1 }} />

        {/* Button */}
        <button
          className="btn-red"
          disabled={phone.length < 7}
          onClick={() => router.push('/otp')}
          style={{
            opacity: phone.length < 7 ? 0.5 : 1,
            cursor: phone.length < 7 ? 'not-allowed' : 'pointer'
          }}
        >
          Send Verification Code
        </button>

        <div style={{
          textAlign: 'center', marginTop: 14,
          fontSize: 12, color: 'var(--gray2)'
        }}>
          By continuing you agree to our{' '}
          <span style={{ color: 'var(--red)', cursor: 'pointer' }}>Terms</span>
          {' '}&{' '}
          <span style={{ color: 'var(--red)', cursor: 'pointer' }}>Privacy</span>
        </div>

      </div>
    </div>
  )
}