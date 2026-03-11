'use client'
import { useRouter } from 'next/navigation'
import '../globals.css'

export default function Verify() {
  const router = useRouter()

  return (
    <div className="phone-wrap" style={{
      background: 'linear-gradient(180deg, #1A1A1A, #2A1010)',
      minHeight: '100vh'
    }}>
      <div className="status-bar" style={{ color: 'rgba(212,175,55,0.7)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      <div className="screen" style={{
        paddingTop: 80, alignItems: 'center'
      }}>

        {/* Back */}
        <div
          onClick={() => router.push('/profile-build')}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.2)',
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 16, color: 'rgba(255,255,255,0.6)',
            marginBottom: 28, alignSelf: 'flex-start'
          }}
        >
          ←
        </div>

        {/* Step */}
        <div style={{
          fontSize: 11, color: 'rgba(212,175,55,0.6)',
          letterSpacing: 2, textTransform: 'uppercase',
          fontWeight: 600, marginBottom: 20
        }}>
          Step 3 of 4 — Trust
        </div>

        {/* Shield */}
        <div style={{
          width: 90, height: 90,
          background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 44,
          marginBottom: 20,
          boxShadow: '0 16px 48px rgba(212,175,55,0.3)',
          animation: 'pulse 3s ease-in-out infinite'
        }}>
          🛡️
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 26,
          color: 'white', textAlign: 'center', marginBottom: 8
        }}>
          Verify Your Identity
        </div>

        <div style={{
          fontSize: 13, color: 'rgba(255,255,255,0.5)',
          textAlign: 'center', marginBottom: 32,
          lineHeight: 1.6
        }}>
          Fiqir is scam-free. Triple verification keeps every member real and safe.
        </div>

        {/* Steps */}
        {[
          { icon: '📱', title: 'Phone Verified', sub: 'Your number is confirmed', done: true },
          { icon: '🤳', title: 'Selfie Verification', sub: 'Quick photo to prove it\'s you', done: false },
          { icon: '🎥', title: '15-Second Video Intro', sub: 'Say hi in Amharic or English', done: false },
        ].map((step, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: 16, padding: '16px 20px',
              display: 'flex', alignItems: 'center',
              gap: 16, width: '100%', marginBottom: 14,
              cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(212,175,55,0.15)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 22,
              flexShrink: 0
            }}>
              {step.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 14, fontWeight: 600, color: 'white'
              }}>
                {step.title}
              </div>
              <div style={{
                fontSize: 12, color: 'rgba(255,255,255,0.4)',
                marginTop: 2
              }}>
                {step.sub}
              </div>
            </div>
            <span style={{ fontSize: 18 }}>
              {step.done ? '✅' : '→'}
            </span>
          </div>
        ))}

        <div style={{ flex: 1 }} />

        <button
          className="btn-gold"
          style={{ marginTop: 24 }}
          onClick={() => router.push('/success')}
        >
          Complete Verification →
        </button>

        <div
          style={{
            textAlign: 'center', fontSize: 13,
            color: 'rgba(255,255,255,0.35)',
            marginTop: 14, cursor: 'pointer'
          }}
          onClick={() => router.push('/success')}
        >
          Skip for now (limited access)
        </div>

      </div>
    </div>
  )
}