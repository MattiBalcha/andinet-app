'use client'
import { useRouter } from 'next/navigation'
import '../globals.css'

const newMatches = [
  { id: 1, name: 'Selam', emoji: '👩' },
  { id: 2, name: 'Tigist', emoji: '🧑' },
  { id: 3, name: 'Hiwot', emoji: '👧' },
  { id: 4, name: 'Miriam', emoji: '👱‍♀️' },
  { id: 5, name: 'Liya', emoji: '👩‍🦱' },
]

const conversations = [
  { id: 1, name: 'Selamawit', emoji: '👩', verified: true, online: true, time: '2m', last: '🎤 Voice message · 0:18', unread: true },
  { id: 2, name: 'Tigist', emoji: '🧑', verified: true, online: false, time: '1h', last: 'Injera with misir wot 😄', unread: true },
  { id: 3, name: 'Hiwot', emoji: '👧', verified: false, online: false, time: '3h', last: "I'm from Addis, been here 3 years", unread: false },
  { id: 4, name: 'Miriam', emoji: '👱‍♀️', verified: false, online: false, time: 'Yesterday', last: 'You: ሰላም! ደህና ነህ? 👋', unread: false },
]

export default function Matches() {
  const router = useRouter()

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      {/* Header */}
      <div style={{ padding: '44px 24px 8px' }}>
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 26, color: 'var(--char)',
          marginBottom: 2
        }}>
          Matches & Chats
        </div>
        <div style={{ fontSize: 13, color: 'var(--gray2)' }}>
          5 new matches · 2 unread
        </div>
      </div>

      {/* New matches bubbles */}
      <div style={{
        display: 'flex', gap: 14,
        padding: '12px 24px',
        overflowX: 'auto', scrollbarWidth: 'none'
      }}>
        {newMatches.map((m) => (
          <div
            key={m.id}
            onClick={() => router.push('/chat')}
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 6,
              cursor: 'pointer', flexShrink: 0
            }}
          >
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              padding: 2.5,
              background: 'linear-gradient(135deg, var(--gold), var(--red))',
              boxShadow: '0 4px 16px rgba(139,26,26,0.2)'
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                border: '2.5px solid var(--cream)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 28,
                background: 'linear-gradient(135deg, var(--cream2), var(--gold))'
              }}>
                {m.emoji}
              </div>
            </div>
            <div style={{
              fontSize: 11, fontWeight: 600,
              color: 'var(--char2)'
            }}>
              {m.name}
            </div>
          </div>
        ))}
      </div>

      {/* Section label */}
      <div style={{
        fontSize: 11, fontWeight: 700,
        letterSpacing: 2, textTransform: 'uppercase',
        color: 'var(--gray2)', padding: '0 24px',
        marginBottom: 6
      }}>
        Conversations
      </div>

      {/* Conversations */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {conversations.map((c) => (
          <div
            key={c.id}
            onClick={() => router.push('/chat')}
            style={{
              display: 'flex', alignItems: 'center',
              gap: 14, padding: '14px 24px',
              cursor: 'pointer', transition: 'background 0.2s',
              borderBottom: '1px solid var(--gray)'
            }}
          >
            {/* Avatar */}
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 26,
              flexShrink: 0, position: 'relative'
            }}>
              {c.emoji}
              {c.online && (
                <div style={{
                  position: 'absolute', bottom: 2, right: 2,
                  width: 14, height: 14,
                  background: '#22C55E', borderRadius: '50%',
                  border: '2.5px solid var(--cream)'
                }} />
              )}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', marginBottom: 4
              }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>
                  {c.name} {c.verified ? '🛡️' : ''}
                </div>
                <div style={{ fontSize: 11, color: 'var(--gray2)' }}>
                  {c.time}
                </div>
              </div>
              <div style={{
                fontSize: 13,
                color: c.unread ? 'var(--char2)' : 'var(--gray2)',
                fontWeight: c.unread ? 600 : 400,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {c.last}
              </div>
            </div>

            {/* Unread dot */}
            {c.unread && (
              <div style={{
                width: 10, height: 10,
                background: 'var(--red)',
                borderRadius: '50%', flexShrink: 0
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => router.push('/discover')}>
          <div className="nav-icon">🔥</div>
          <div className="nav-label">Discover</div>
        </div>
        <div className="nav-item active">
          <div className="nav-icon">💛</div>
          <div className="nav-label">Matches</div>
        </div>
        <div className="nav-item active" style={{ background: 'none' }}>
          <div className="nav-icon">💬</div>
          <div className="nav-label">Messages</div>
        </div>
        <div className="nav-item" onClick={() => router.push('/profile')}>
          <div className="nav-icon">👤</div>
          <div className="nav-label">Profile</div>
        </div>
      </div>
    </div>
  )
}