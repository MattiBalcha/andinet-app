'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

const initialReports = [
  {
    id: 1,
    name: 'Amira_DC23',
    emoji: '👤',
    count: 4,
    type: 'Investment scam',
    severity: 'HIGH',
    note: 'Fake salon owner pushing crypto investment. Matches Kum Neger scam pattern exactly.',
    urgent: true,
  },
  {
    id: 2,
    name: 'Dawit_Eth',
    emoji: '🧑',
    count: 1,
    type: 'Fake photo',
    severity: 'MED',
    note: 'Profile photo appears to be a stock image. Video verification not completed.',
    urgent: false,
  },
]

const metrics = [
  { icon: '👥', value: '2,412', label: 'Total Users', change: '↑ +124 this week' },
  { icon: '💰', value: '$8.2K', label: 'Monthly Revenue', change: '↑ +$1.4K vs last month' },
  { icon: '💛', value: '847', label: 'Matches Today', change: '↑ +12% vs yesterday' },
  { icon: '🛡️', value: '98.1%', label: 'Verified Users', change: '↑ Top 1% of all apps' },
]

export default function Admin() {
  const router = useRouter()
  const [reports, setReports] = useState(initialReports)
  const [handled, setHandled] = useState({})

  const handleAction = (id, action) => {
    setHandled((prev) => ({ ...prev, [id]: action }))
    setTimeout(() => {
      setReports((prev) => prev.filter((r) => r.id !== id))
    }, 800)
  }

  return (
    <div className="phone-wrap" style={{
      background: '#1A1A1A', minHeight: '100vh'
    }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1A0808, #2A1010)',
        padding: '44px 20px 16px',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
        flexShrink: 0
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 10, marginBottom: 4
        }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 20, color: 'white'
          }}>
            Fiqir Admin
          </div>
          <div style={{
            background: 'var(--red)', color: 'white',
            fontSize: 10, fontWeight: 800,
            padding: '3px 8px', borderRadius: 50,
            letterSpacing: 1
          }}>
            MODERATOR
          </div>
          <span
            onClick={() => router.push('/profile')}
            style={{
              marginLeft: 'auto', cursor: 'pointer',
              fontSize: 16, color: 'rgba(255,255,255,0.5)'
            }}
          >
            ← Back
          </span>
        </div>

        <div style={{
          fontSize: 12, color: 'rgba(255,255,255,0.4)',
          marginBottom: 14
        }}>
          {reports.length} reports need review · Live
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 8
        }}>
          {[
            { label: 'Users', value: '2.4K' },
            { label: 'Real', value: '98%' },
            { label: 'Reports', value: reports.length },
            { label: 'MRR', value: '$8.2K' },
          ].map((s) => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 12, padding: '10px 8px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: 18, fontWeight: 700,
                color: 'var(--gold)'
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 9, color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: 0.5, marginTop: 2
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>

        {/* Reports */}
        <div style={{
          fontSize: 10, fontWeight: 700,
          letterSpacing: 2, textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)', marginBottom: 8
        }}>
          🚨 Reports Needing Action
        </div>

        {reports.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '32px 0',
            color: 'rgba(255,255,255,0.3)'
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>All clear!</div>
            <div style={{ fontSize: 13, marginTop: 6 }}>No pending reports</div>
          </div>
        )}

        {reports.map((r) => (
          <div
            key={r.id}
            style={{
              background: r.urgent
                ? 'rgba(139,26,26,0.15)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${r.urgent
                ? 'rgba(220,50,50,0.4)' : 'rgba(212,175,55,0.25)'}`,
              borderRadius: 16, padding: 14,
              marginBottom: 10,
              opacity: handled[r.id] ? 0.4 : 1,
              transition: 'all 0.4s'
            }}
          >
            {/* Report header */}
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: 10, marginBottom: 10
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, #3A2020, #2A1010)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 20,
                flexShrink: 0,
                border: `2px solid ${r.urgent
                  ? 'rgba(139,26,26,0.5)' : 'rgba(255,255,255,0.1)'}`
              }}>
                {r.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: 'white'
                }}>
                  Profile: {r.name}
                </div>
                <div style={{
                  fontSize: 11, color: 'rgba(255,255,255,0.4)',
                  marginTop: 1
                }}>
                  Reported by {r.count} user{r.count > 1 ? 's' : ''} · {r.type}
                </div>
              </div>
              <div style={{
                background: r.urgent
                  ? 'rgba(220,50,50,0.25)' : 'rgba(212,175,55,0.15)',
                color: r.urgent ? '#FF6B6B' : 'var(--gold)',
                border: `1px solid ${r.urgent
                  ? 'rgba(220,50,50,0.3)' : 'rgba(212,175,55,0.25)'}`,
                fontSize: 10, fontWeight: 800,
                padding: '3px 8px', borderRadius: 50,
                textTransform: 'uppercase'
              }}>
                {r.severity}
              </div>
            </div>

            {/* Note */}
            <div style={{
              fontSize: 12, color: 'rgba(255,255,255,0.5)',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: 10, padding: '8px 12px',
              marginBottom: 10, lineHeight: 1.5
            }}>
              "{r.note}"
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: handled[r.id] === 'ban' ? '✓ Banned' : '🚫 Ban', action: 'ban', bg: 'rgba(220,50,50,0.2)', color: '#FF6B6B', border: 'rgba(220,50,50,0.3)' },
                { label: handled[r.id] === 'warn' ? '✓ Warned' : '⚠️ Warn', action: 'warn', bg: 'rgba(212,175,55,0.15)', color: 'var(--gold)', border: 'rgba(212,175,55,0.25)' },
                { label: handled[r.id] === 'clear' ? '✓ Cleared' : '✓ Clear', action: 'clear', bg: 'rgba(45,106,79,0.2)', color: '#4ADE80', border: 'rgba(45,106,79,0.3)' },
              ].map((btn) => (
                <button
                  key={btn.action}
                  onClick={() => handleAction(r.id, btn.action)}
                  disabled={!!handled[r.id]}
                  style={{
                    flex: 1, padding: 8, borderRadius: 10,
                    fontSize: 12, fontWeight: 700,
                    cursor: handled[r.id] ? 'default' : 'pointer',
                    background: btn.bg, color: btn.color,
                    border: `1px solid ${btn.border}`,
                    transition: 'all 0.15s',
                    fontFamily: 'inherit'
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Metrics */}
        <div style={{
          fontSize: 10, fontWeight: 700,
          letterSpacing: 2, textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: 8, marginTop: 8
        }}>
          📊 Platform Metrics
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 10
        }}>
          {metrics.map((m) => (
            <div key={m.label} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16, padding: 14,
              cursor: 'pointer', transition: 'all 0.2s'
            }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{m.icon}</div>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: 22, fontWeight: 700, color: 'white'
              }}>
                {m.value}
              </div>
              <div style={{
                fontSize: 11, color: 'rgba(255,255,255,0.35)',
                marginTop: 2
              }}>
                {m.label}
              </div>
              <div style={{
                fontSize: 11, color: '#4ADE80',
                marginTop: 4, fontWeight: 600
              }}>
                {m.change}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}