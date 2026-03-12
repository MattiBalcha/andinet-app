'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

const events = [
  {
    id: 1,
    title: 'Ethiopian New Year Mixer',
    amharic: 'አዲስ አመት ፓርቲ',
    month: 'SEP', day: '11',
    location: 'DC, Adams Morgan',
    time: '7:00 PM',
    price: '$15',
    tag: 'FEATURED',
    tagColor: 'var(--gold)',
    emoji: '🎊',
    attendees: 143,
    featured: true,
  },
  {
    id: 2,
    title: 'Virtual Buna Ceremony ☕',
    month: 'OCT', day: '5',
    location: '🎥 Online · Amharic & English',
    price: 'FREE',
    tagColor: 'var(--green)',
    tagBg: 'rgba(45,106,79,0.1)',
  },
  {
    id: 3,
    title: 'DC Habesha Speed Dating 💘',
    month: 'OCT', day: '18',
    location: '📍 Silver Spring, MD · Ages 25–40',
    price: '$20',
    tagColor: '#8B6914',
    tagBg: 'rgba(212,175,55,0.15)',
  },
  {
    id: 4,
    title: 'Orthodox Singles Retreat ✝️',
    month: 'NOV', day: '20',
    location: '🎥 Virtual · Ethiopian + Eritrean',
    price: 'ONLINE',
    tagColor: 'var(--red)',
    tagBg: 'rgba(139,26,26,0.1)',
  },
]

export default function Events() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('All')
  const tabs = ['All', 'DC Metro', 'Virtual', 'Atlanta']

  return (
    <div className="phone-wrap">

      {/* Header */}
      <div style={{
        background: 'linear-gradient(160deg, #6B0F0F, #8B1A1A)',
        padding: '44px 24px 20px',
        position: 'relative', overflow: 'hidden',
        flexShrink: 0
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.15), transparent 60%)'
        }} />

        {/* Status + back */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 14, position: 'relative', zIndex: 2
        }}>
          <span style={{
            fontSize: 13, fontWeight: 700,
            color: 'rgba(255,255,255,0.8)'
          }}>
            9:41
          </span>
          <span
            onClick={() => router.push('/discover')}
            style={{
              cursor: 'pointer', fontSize: 16,
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            ← Back
          </span>
        </div>

        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 26,
          color: 'white', marginBottom: 4,
          position: 'relative', zIndex: 2
        }}>
          Habesha Events 🎊
        </div>
        <div style={{
          fontSize: 13, color: 'rgba(255,255,255,0.6)',
          marginBottom: 16, position: 'relative', zIndex: 2
        }}>
          Meet real connections in person
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 8,
          position: 'relative', zIndex: 2
        }}>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '7px 16px', borderRadius: 50,
                fontSize: 12, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                background: activeTab === tab ? 'var(--gold)' : 'transparent',
                border: `1.5px solid ${activeTab === tab ? 'var(--gold)' : 'rgba(255,255,255,0.25)'}`,
                color: activeTab === tab ? 'var(--char)' : 'rgba(255,255,255,0.65)'
              }}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>

        {/* Featured event */}
        <div style={{
          background: 'linear-gradient(135deg, #1A0A0A, #3A1A1A)',
          borderRadius: 24, overflow: 'hidden',
          marginBottom: 16, cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(139,26,26,0.25)',
          transition: 'transform 0.2s'
        }}>
          <div style={{
            height: 140,
            background: 'linear-gradient(135deg, #8B1A1A, #4A0A0A)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 60,
            position: 'relative'
          }}>
            🎊
            <div style={{
              position: 'absolute', top: 12, left: 12,
              background: 'var(--gold)', color: 'var(--char)',
              borderRadius: 12, padding: '6px 12px',
              textAlign: 'center', fontWeight: 700,
              fontSize: 13, lineHeight: 1.2
            }}>
              SEP<br />11
            </div>
            <div style={{
              position: 'absolute', top: 12, right: 12,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              color: 'var(--gold)', borderRadius: 50,
              padding: '4px 10px', fontSize: 11,
              fontWeight: 700,
              border: '1px solid rgba(212,175,55,0.3)'
            }}>
              ⭐ FEATURED
            </div>
          </div>
          <div style={{ padding: '16px 18px 20px' }}>
            <div style={{
              fontFamily: 'Georgia, serif', fontSize: 18,
              color: 'white', marginBottom: 8
            }}>
              Ethiopian New Year Mixer<br />
              <span style={{
                fontSize: 14, color: 'var(--gold)',
                fontStyle: 'italic'
              }}>
                አዲስ አመት ፓርቲ
              </span>
            </div>
            <div style={{
              display: 'flex', gap: 12,
              flexWrap: 'wrap', marginBottom: 10
            }}>
              {['📍 DC, Adams Morgan', '🕖 7:00 PM', '🎟 $15'].map((d) => (
                <span key={d} style={{
                  fontSize: 12,
                  color: d.includes('$') ? 'var(--gold)' : 'rgba(255,255,255,0.55)'
                }}>
                  {d}
                </span>
              ))}
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              <div style={{ display: 'flex' }}>
                {['👩', '👨', '👧'].map((e, i) => (
                  <div key={i} style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
                    border: '2px solid #3A1A1A',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 14,
                    marginLeft: i > 0 ? -8 : 0
                  }}>
                    {e}
                  </div>
                ))}
              </div>
              <div style={{
                fontSize: 12, color: 'rgba(255,255,255,0.5)'
              }}>
                +143 Fiqir members going
              </div>
            </div>
          </div>
        </div>

        {/* Regular events */}
        {events.slice(1).map((ev) => (
          <div key={ev.id} style={{
            background: 'white', borderRadius: 20,
            padding: 16, display: 'flex', gap: 14,
            marginBottom: 12,
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            cursor: 'pointer', transition: 'all 0.2s'
          }}>
            <div style={{
              width: 48, height: 56, borderRadius: 14,
              background: 'linear-gradient(135deg, var(--red), #A02020)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              color: 'white', flexShrink: 0
            }}>
              <div style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: 1, textTransform: 'uppercase',
                opacity: 0.8
              }}>
                {ev.month}
              </div>
              <div style={{
                fontSize: 22, fontWeight: 700,
                fontFamily: 'Georgia, serif', lineHeight: 1
              }}>
                {ev.day}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 14, fontWeight: 700,
                color: 'var(--char)', marginBottom: 4
              }}>
                {ev.title}
              </div>
              <div style={{
                fontSize: 12, color: 'var(--gray2)', marginBottom: 6
              }}>
                {ev.location}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  padding: '3px 8px', borderRadius: 50,
                  background: ev.tagBg,
                  color: ev.tagColor,
                  border: `1px solid ${ev.tagColor}20`
                }}>
                  {ev.price}
                </span>
                <span style={{
                  fontSize: 12, color: 'var(--red)',
                  fontWeight: 700, cursor: 'pointer'
                }}>
                  RSVP →
                </span>
              </div>
            </div>
          </div>
        ))}
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
        <div className="nav-item active">
          <div className="nav-icon">🎉</div>
          <div className="nav-label">Events</div>
        </div>
        <div className="nav-item" onClick={() => router.push('/profile')}>
          <div className="nav-icon">👤</div>
          <div className="nav-label">Profile</div>
        </div>
      </div>
    </div>
  )
}