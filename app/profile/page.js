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
        {/* Status bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 44, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 28px',
          color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 700
        }}>
          <span>9:41</span>
          <span>●●● 🔋</span>
        </div>

        {/* Edit button */}
        <div style={{
          position: 'absolute', top: 52, right: 16,
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
      <div style={{ flex: 1, overflowY: 'auto', padding: '52px 24px 80px' }}>

        {/* Name row */}
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
            alignItems: 'center', gap: 4,
            boxShadow: '0 2px 8px rgba(212,175,55,0.35)'
          }}>
            🛡️ Verified
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
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

        {/* About */}
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

        {/* Details pills */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: 8, marginBottom: 16
        }}>
          {['💍 Marriage-minded', '✝️ Orthodox', '📍 Washington DC', '🌍 Diaspora', '🇪🇹 Amhara'].map((pill) => (
            <div key={pill} style={{
              background: '#FFFBF0',
              border: '1.5px solid var(--gold)',
              borderRadius: 50, padding: '8px 14px',
              fontSize: 12, fontWeight: 600,
              color: 'var(--red)',
              display: 'flex', alignItems: 'center', gap: 6
            }}>
              {pill}
            </div>
          ))}
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
          {/* Notifications toggle */}
          <div className="sitem" style={{
            display: 'flex', alignItems: 'center',
            gap: 14, padding: '16px 18px',
            borderBottom: '1px solid var(--gray)'
          }}>
            <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>🔔</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>Notifications</span>
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
                background: 'white', transition: 'left 0.2s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }} />
            </div>
          </div>

          {/* Incognito toggle */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 14, padding: '16px 18px',
            borderBottom: '1px solid var(--gray)'
          }}>
            <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>👁️</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>Incognito Mode</span>
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
                background: 'white', transition: 'left 0.2s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }} />
            </div>
          </div>

          {/* Premium */}
          <div
            onClick={() => router.push('/premium')}
            style={{
              display: 'flex', alignItems: 'center',
              gap: 14, padding: '16px 18px',
              borderBottom: '1px solid var(--gray)',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>👑</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>Upgrade to Premium</span>
            <span style={{ fontSize: 14, color: 'var(--gold)' }}>→</span>
          </div>

          {/* Admin */}
          <div
            onClick={() => router.push('/admin')}
            style={{
              display: 'flex', alignItems: 'center',
              gap: 14, padding: '16px 18px',
              borderBottom: '1px solid var(--gray)',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>🛡️</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>Admin Dashboard</span>
            <span style={{ fontSize: 14, color: 'var(--red)' }}>→</span>
          </div>

          {/* Sign out */}
          <div
            onClick={() => router.push('/')}
            style={{
              display: 'flex', alignItems: 'center',
              gap: 14, padding: '16px 18px',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>🚪</span>
            <span style={{
              flex: 1, fontSize: 14, fontWeight: 500,
              color: 'var(--red)'
            }}>
              Sign Out
            </span>
          </div>
        </div>

        <div style={{ height: 20 }} />
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