'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

export default function Profile() {
  const router = useRouter()
  const [notifications, setNotifications] = useState(true)
  const [incognito, setIncognito] = useState(false)

  return (
    <div className="phone-wrap">

      {/* Cover */}
      <div style={{
        height: 200,
        background: 'linear-gradient(160deg, #6B0F0F, #8B1A1A, #4A0A0A)',
        position: 'relative', flexShrink: 0
      }}>
        <div style={{
          position: 'absolute', top: 44, right: 16,
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 20, padding: '6px 12px',
          color: 'white', fontSize: 12,
          fontWeight: 600, cursor: 'pointer'
        }}>
          ✏️ Edit
        </div>

        {/* Avatar */}
        <div style={{
          position: 'absolute', bottom: -44, left: 24
        }}>
          <div style={{
            width: 90, height: 90, borderRadius: '50%',
            border: '4px solid var(--cream)',
            background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 44,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            👤
            <div style={{
              position: 'absolute', bottom: 2, right: 2,
              width: 26, height: 26, borderRadius: '50%',
              background: 'var(--gold)',
              border: '3px solid var(--cream)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 12,
              cursor: 'pointer'
            }}>
              📷
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '52px 24px 16px' }}>

        {/* Name & verified */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', marginBottom: 4
        }}>
          <div>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 24, fontWeight: 700
            }}>
              Matti A.
            </div>
            <div style={{ fontSize: 14, color: 'var(--gray2)' }}>
              Washington DC · 32 · Amhara
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--gold), #B8960C)',
            color: 'var(--char)', fontSize: 11,
            fontWeight: 700, padding: '4px 10px',
            borderRadius: 50, display: 'flex',
            alignItems: 'center', gap: 4
          }}>
            🛡️ Verified
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10, margin: '16px 0'
        }}>
          {[
            { num: '24', label: 'Likes' },
            { num: '7', label: 'Matches' },
            { num: '94%', label: 'Complete' },
          ].map((s) => (
            <div key={s.label} style={{
              background: 'white', borderRadius: 16,
              padding: '14px 10px', textAlign: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: 22, fontWeight: 700,
                color: 'var(--red)'
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: 11, color: 'var(--gray2)',
                fontWeight: 600, marginTop: 2,
                textTransform: 'uppercase', letterSpacing: 0.5
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div style={{
          fontSize: 12, fontWeight: 700,
          letterSpacing: 2, textTransform: 'uppercase',
          color: 'var(--gray2)', marginBottom: 10, marginTop: 8
        }}>
          About Me
        </div>
        <div style={{
          background: 'white', borderRadius: 16,
          padding: 16, fontSize: 14, lineHeight: 1.7,
          color: 'var(--char2)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          borderLeft: '3px solid var(--gold)',
          marginBottom: 16
        }}>
          "ቡና ወዳጅ፣ data ባለሙያ። Looking for a serious Habesha connection built on faith, family, and injera 😄"
        </div>

        {/* Boost banner */}
        <div
          onClick={() => router.push('/premium')}
          style={{
            background: 'linear-gradient(135deg, #FFF8E8, #FFF0D4)',
            border: '1.5px solid var(--gold)',
            borderRadius: 16, padding: '14px 16px',
            display: 'flex', alignItems: 'center',
            gap: 12, cursor: 'pointer', marginBottom: 16
          }}
        >
          <span style={{ fontSize: 28 }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>
              Boost Your Profile
            </div>
            <div style={{ fontSize: 12, color: 'var(--gray2)', marginTop: 2 }}>
              Be seen by 10x more people
            </div>
          </div>
          <span style={{ fontSize: 18, color: 'var(--gold)' }}>→</span>
        </div>

        {/* Settings */}
        <div style={{
          fontSize: 12, fontWeight: 700,
          letterSpacing: 2, textTransform: 'uppercase',
          color: 'var(--gray2)', marginBottom: 10
        }}>
          Settings
        </div>
        <div style={{
          background: 'white', borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
        }}>
          {[
            {
              icon: '🔔', label: 'Notifications',
              right: (
                <div
                  onClick={() => setNotifications(!notifications)}
                  style={{
                    width: 44, height: 24, borderRadius: 12,
                    background: notifications ? 'var(--green)' : 'var(--gray2)',
                    position: 'relative', cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 3,
                    left: notifications ? 23 : 3,
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'white',
                    transition: 'left 0.2s',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                  }} />
                </div>
              )
            },
            {
              icon: '👁️', label: 'Incognito Mode',
              right: (
                <div
                  onClick={() => setIncognito(!incognito)}
                  style={{
                    width: 44, height: 24, borderRadius: 12,
                    background: incognito ? 'var(--green)' : 'var(--gray2)',
                    position: 'relative', cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 3,
                    left: incognito ? 23 : 3,
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'white',
                    transition: 'left 0.2s',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                  }} />
                </div>
              )
            },
            {
              icon: '👑', label: 'Upgrade to Premium',
              right: <span style={{ fontSize: 14, color: 'var(--gold)' }}>→</span>,
              action: () => router.push('/premium')
            },
            {
              icon: '🛡️', label: 'Admin Dashboard',
              right: <span style={{ fontSize: 14, color: 'var(--red)' }}>→</span>,
              action: () => router.push('/admin')
            },
            {
              icon: '🚪', label: 'Sign Out',
              right: null,
              action: () => router.push('/'),
              red: true
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={item.action}
              style={{
                display: 'flex', alignItems: 'center',
                gap: 14, padding: '16px 18px',
                cursor: item.action ? 'pointer' : 'default',
                borderBottom: i < 4 ? '1px solid var(--gray)' : 'none',
                transition: 'background 0.2s'
              }}
            >
              <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>
                {item.icon}
              </span>
              <span style={{
                flex: 1, fontSize: 14, fontWeight: 500,
                color: item.red ? 'var(--red)' : 'var(--char)'
              }}>
                {item.label}
              </span>
              {item.right}
            </div>
          ))}
        </div>

        <div style={{ height: 90 }} />
      </div>

      {/* Bottom nav */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => router.push('/discover')}>
          <div className="nav-icon">🔥</div>
          <div className="nav-label">Discover</div>
        </div>
        <div className="nav-item" onClick={() => router.push('/matches')}>
          <div className="nav-icon">💛</div>
          <div className="nav-label">Matches</div>
        </div>
        <div className="nav-item" onClick={() => router.push('/events')}>
          <div className="nav-icon">🎉</div>
          <div className="nav-label">Events</div>
        </div>
        <div className="nav-item active">
          <div className="nav-icon">👤</div>
          <div className="nav-label">Profile</div>
        </div>
      </div>
    </div>
  )
}