'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

export default function ProfileBuild() {
  const router = useRouter()
  const [intent, setIntent] = useState(['Serious'])
  const [religion, setReligion] = useState(['Orthodox'])
  const [region, setRegion] = useState(['Tigrinya'])

  const toggle = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((i) => i !== value))
    } else {
      setList([...list, value])
    }
  }

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div style={{
        paddingTop: 60, paddingBottom: 32,
        overflowY: 'auto', flex: 1,
        padding: '60px 28px 32px'
      }}>

        {/* Step */}
        <div style={{
          fontSize: 11, color: 'var(--gray2)',
          letterSpacing: 2, textTransform: 'uppercase',
          fontWeight: 600, marginBottom: 8
        }}>
          Step 2 of 4 — Your Profile
        </div>

        {/* Progress bar */}
        <div style={{
          width: '100%', height: 4,
          background: 'var(--cream2)',
          borderRadius: 2, overflow: 'hidden',
          marginBottom: 28
        }}>
          <div style={{
            height: '100%', width: '50%',
            background: 'linear-gradient(90deg, var(--red), var(--gold))',
            borderRadius: 2
          }} />
        </div>

        {/* Photo upload */}
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--cream2), #EDD5B0)',
          border: '3px dashed var(--gold)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', margin: '0 auto 24px',
          fontSize: 28, transition: 'all 0.2s'
        }}>
          📷
          <div style={{
            fontSize: 10, color: 'var(--gray2)',
            fontWeight: 600, letterSpacing: 1,
            textTransform: 'uppercase', marginTop: 4
          }}>
            Add Photo
          </div>
        </div>

        {/* Name */}
        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="e.g. Selamawit"
          style={{ marginBottom: 16 }}
        />

        {/* Bio */}
        <label className="label">About Me · ስለ እኔ</label>
        <textarea
          className="input"
          placeholder="Tell your story... no limit 😊"
          style={{
            resize: 'none', height: 80,
            lineHeight: 1.6, marginBottom: 16
          }}
        />

        {/* Intent */}
        <label className="label">I'm Looking For</label>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: 8, marginBottom: 16
        }}>
          {['💍 Marriage', '❤️ Serious', '🤝 Friendship', '🌍 Diaspora'].map((item) => (
            <div
              key={item}
              className={`chip ${intent.includes(item) ? 'active' : ''}`}
              onClick={() => toggle(intent, setIntent, item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Religion */}
        <label className="label">Religion</label>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: 8, marginBottom: 16
        }}>
          {['✝️ Orthodox', '☪️ Muslim', '✝️ Protestant', '⛪ Catholic'].map((item) => (
            <div
              key={item}
              className={`chip ${religion.includes(item) ? 'active' : ''}`}
              onClick={() => toggle(religion, setReligion, item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Region */}
        <label className="label">Region</label>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: 8, marginBottom: 32
        }}>
          {['Amhara', 'Tigrinya', 'Oromo', 'Eritrean', 'Gurage'].map((item) => (
            <div
              key={item}
              className={`chip ${region.includes(item) ? 'active' : ''}`}
              onClick={() => toggle(region, setRegion, item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="btn-red"
          onClick={() => router.push('/verify')}
        >
          Continue →
        </button>

      </div>
    </div>
  )
}