'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

export default function Language() {
  const router = useRouter()
  const [selected, setSelected] = useState('amharic')

  const languages = [
    { id: 'amharic', flag: '🇪🇹', name: 'አማርኛ — Amharic', sub: "Ethiopia's official language" },
    { id: 'tigrinya', flag: '🇪🇷', name: 'ትግርኛ — Tigrinya', sub: 'Eritrea & Tigray' },
    { id: 'english', flag: '🇺🇸', name: 'English', sub: 'Diaspora & international' },
  ]

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div className="screen" style={{ alignItems: 'center', paddingTop: 80 }}>
        <div style={{ fontSize: 40, marginBottom: 20 }}>🌍</div>

        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 26,
          fontWeight: 700,
          color: 'var(--red)',
          textAlign: 'center',
          marginBottom: 6
        }}>
          Choose Your Language
        </div>

        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 18,
          color: 'var(--gold)',
          textAlign: 'center',
          marginBottom: 8
        }}>
          ቋንቋዎን ይምረጡ
        </div>

        <div style={{
          fontSize: 14,
          color: 'var(--gray2)',
          textAlign: 'center',
          marginBottom: 36
        }}>
          You can change this anytime in settings
        </div>

        {languages.map((lang) => (
          <div
            key={lang.id}
            onClick={() => setSelected(lang.id)}
            style={{
              background: selected === lang.id
                ? 'linear-gradient(135deg, #FFFBF0, #FFF8E8)'
                : 'white',
              border: `2px solid ${selected === lang.id ? 'var(--gold)' : 'var(--cream2)'}`,
              borderRadius: 16,
              padding: '18px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              cursor: 'pointer',
              transition: 'all 0.25s',
              width: '100%',
              marginBottom: 14,
              transform: selected === lang.id ? 'translateX(4px)' : 'none'
            }}
          >
            <span style={{ fontSize: 32 }}>{lang.flag}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{lang.name}</div>
              <div style={{ fontSize: 12, color: 'var(--gray2)', marginTop: 2 }}>{lang.sub}</div>
            </div>
            <div style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: selected === lang.id ? 'var(--gold)' : 'transparent',
              border: `2px solid ${selected === lang.id ? 'var(--gold)' : 'var(--cream2)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              color: 'white'
            }}>
              {selected === lang.id ? '✓' : ''}
            </div>
          </div>
        ))}

        <div style={{ flex: 1 }} />

        <button
          className="btn-red"
          onClick={() => router.push('/phone')}
        >
          Continue →
        </button>
      </div>
    </div>
  )
}