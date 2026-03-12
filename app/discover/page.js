'use client'
import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'
import '../globals.css'

const profiles = [
  {
    id: 1,
    name: 'Selamawit',
    age: 26,
    city: 'Washington DC',
    region: 'Amhara',
    religion: '✝️ Orthodox',
    intent: '❤️ Serious',
    bio: '"ቡና ደቀ-ምሁር፣ ቤተ-ክርስቲያን ቁርጠኛ። Looking for someone who loves injera as much as I do 😄"',
    emoji: '👩',
    verified: true,
    bg: 'linear-gradient(160deg, #1A2A3A, #0A1A2A)'
  },
  {
    id: 2,
    name: 'Tigist',
    age: 25,
    city: 'Atlanta GA',
    region: 'Tigrinya',
    religion: '✝️ Orthodox',
    intent: '💍 Marriage',
    bio: '"Family-oriented, love cooking and travel. Seeking a serious Habesha connection 🇪🇹"',
    emoji: '🧑',
    verified: true,
    bg: 'linear-gradient(160deg, #3A2020, #2A1A1A)'
  },
  {
    id: 3,
    name: 'Mekdes',
    age: 27,
    city: 'DC Metro',
    region: 'Tigrinya',
    religion: '✝️ Orthodox',
    intent: '💍 Marriage',
    bio: '"Nurse, church choir member. Looking for a God-fearing Habesha man 🙏"',
    emoji: '👤',
    verified: false,
    bg: 'linear-gradient(160deg, #2D3A2D, #1A2A1A)'
  },
]

export default function Discover() {
  const router = useRouter()
  const [cards, setCards] = useState(profiles)
  const [filter, setFilter] = useState('All Habesha')
  const cardRef = useRef(null)
  const startX = useRef(0)
  const startY = useRef(0)
  const currentX = useRef(0)
  const isDragging = useRef(false)

  const filters = ['All Habesha', '🇪🇹 Ethiopian', '🇪🇷 Eritrean', '✝️ Orthodox', '💍 Marriage']

  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX
    startY.current = e.clientY
    cardRef.current.style.transition = 'none'
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    currentX.current = e.clientX - startX.current
    const currentY = e.clientY - startY.current
    const rotate = currentX.current * 0.08
    cardRef.current.style.transform =
      `translateX(${currentX.current}px) translateY(${currentY * 0.3}px) rotate(${rotate}deg)`
    const likeEl = document.getElementById('like-label')
    const nopeEl = document.getElementById('nope-label')
    if (likeEl && nopeEl) {
      likeEl.style.opacity = currentX.current > 20 ? Math.min((currentX.current - 20) / 60, 1) : 0
      nopeEl.style.opacity = currentX.current < -20 ? Math.min((-currentX.current - 20) / 60, 1) : 0
    }
  }

  const handleMouseUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
    if (currentX.current > 90) {
      swipe('right')
    } else if (currentX.current < -90) {
      swipe('left')
    } else {
      cardRef.current.style.transform = 'rotate(-1deg)'
      document.getElementById('like-label').style.opacity = 0
      document.getElementById('nope-label').style.opacity = 0
    }
    currentX.current = 0
  }

  const swipe = (dir) => {
    if (!cardRef.current) return
    cardRef.current.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.45s'
    cardRef.current.style.transform =
      `translateX(${dir === 'right' ? 600 : -600}px) rotate(${dir === 'right' ? 20 : -20}deg)`
    cardRef.current.style.opacity = '0'
    document.getElementById('like-label').style.opacity = 0
    document.getElementById('nope-label').style.opacity = 0
    if (dir === 'right') {
      setTimeout(() => router.push('/match'), 480)
    } else {
      setTimeout(() => {
        setCards((prev) => {
          const newCards = [...prev]
          newCards.shift()
          return newCards
        })
        if (cardRef.current) {
          cardRef.current.style.transition = 'none'
          cardRef.current.style.transform = 'rotate(-1deg)'
          cardRef.current.style.opacity = '1'
        }
      }, 500)
    }
  }

  return (
    <div className="phone-wrap">
      <div className="status-bar" style={{ color: 'var(--char)' }}>
        <span>9:41</span>
        <span>●●● 🔋</span>
      </div>

      {/* Header */}
      <div style={{
        padding: '44px 24px 12px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 22,
          fontStyle: 'italic', color: 'var(--red)'
        }}>
          Fiqir <span style={{
            fontSize: 14, color: 'var(--gold)',
            fontStyle: 'normal', marginLeft: 4
          }}>ፍቅር</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => router.push('/events')} style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'white', border: 'none',
            cursor: 'pointer', fontSize: 18,
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}>🎉</button>
          <button style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'white', border: 'none',
            cursor: 'pointer', fontSize: 18,
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}>⚙️</button>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{
        display: 'flex', gap: 8,
        padding: '0 24px 14px',
        overflowX: 'auto', scrollbarWidth: 'none'
      }}>
        {filters.map((f) => (
          <div
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '7px 14px', borderRadius: 50,
              background: filter === f ? 'var(--red)' : 'white',
              border: `1.5px solid ${filter === f ? 'var(--red)' : 'var(--cream2)'}`,
              fontSize: 12, fontWeight: 600,
              color: filter === f ? 'white' : 'var(--char2)',
              cursor: 'pointer', whiteSpace: 'nowrap',
              flexShrink: 0, transition: 'all 0.2s'
            }}
          >
            {f}
          </div>
        ))}
      </div>

      {/* Card Stack */}
      <div style={{
        position: 'relative', flex: 1,
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px', overflow: 'hidden',
        height: 440
      }}>
        {cards.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--gray2)' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>💛</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>No more profiles!</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>Check back soon for new members</div>
          </div>
        ) : (
          <>
            {/* Back cards */}
            {cards[2] && (
              <div style={{
                position: 'absolute', width: 320, height: 430,
                borderRadius: 28, overflow: 'hidden',
                background: cards[2].bg,
                transform: 'rotate(-1.5deg) translateY(22px) scale(0.94)',
                zIndex: 1,
                boxShadow: '0 24px 60px rgba(0,0,0,0.22)'
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 90
                }}>
                  {cards[2].emoji}
                </div>
              </div>
            )}
            {cards[1] && (
              <div style={{
                position: 'absolute', width: 320, height: 430,
                borderRadius: 28, overflow: 'hidden',
                background: cards[1].bg,
                transform: 'rotate(2deg) translateY(12px) scale(0.97)',
                zIndex: 2,
                boxShadow: '0 24px 60px rgba(0,0,0,0.22)'
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 90
                }}>
                  {cards[1].emoji}
                </div>
              </div>
            )}

            {/* Top card */}
            {cards[0] && (
              <div
                ref={cardRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  position: 'absolute', width: 320, height: 430,
                  borderRadius: 28, overflow: 'hidden',
                  background: cards[0].bg,
                  transform: 'rotate(-1deg)',
                  zIndex: 3, cursor: 'grab',
                  userSelect: 'none',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.22)'
                }}
              >
                {/* Verified badge */}
                {cards[0].verified && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
                    borderRadius: 50, padding: '4px 10px',
                    fontSize: 11, fontWeight: 700,
                    color: 'var(--char)', zIndex: 5
                  }}>
                    🛡️ Verified
                  </div>
                )}

                {/* Like label */}
                <div id="like-label" style={{
                  position: 'absolute', top: 24, left: 20,
                  background: 'var(--green)', color: 'white',
                  fontSize: 13, fontWeight: 800,
                  letterSpacing: 2, padding: '8px 16px',
                  borderRadius: 10, border: '3px solid white',
                  transform: 'rotate(-15deg)', opacity: 0,
                  zIndex: 10, pointerEvents: 'none',
                  transition: 'opacity 0.15s'
                }}>
                  ❤️ LIKE
                </div>

                {/* Nope label */}
                <div id="nope-label" style={{
                  position: 'absolute', top: 24, right: 20,
                  background: 'var(--red)', color: 'white',
                  fontSize: 13, fontWeight: 800,
                  letterSpacing: 2, padding: '8px 16px',
                  borderRadius: 10, border: '3px solid white',
                  transform: 'rotate(15deg)', opacity: 0,
                  zIndex: 10, pointerEvents: 'none',
                  transition: 'opacity 0.15s'
                }}>
                  ✗ NOPE
                </div>

                {/* Emoji */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 90
                }}>
                  {cards[0].emoji}
                </div>

                {/* Gradient */}
                <div style={{
                  position: 'absolute', bottom: 0,
                  left: 0, right: 0, height: '60%',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.82), rgba(0,0,0,0.4) 50%, transparent)'
                }} />

                {/* Info */}
                <div style={{
                  position: 'absolute', bottom: 0,
                  left: 0, right: 0,
                  padding: '20px 20px 24px',
                  color: 'white', zIndex: 2
                }}>
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 24, fontWeight: 700,
                    marginBottom: 4
                  }}>
                    {cards[0].name}, {cards[0].age}
                  </div>
                  <div style={{
                    display: 'flex', gap: 6,
                    flexWrap: 'wrap', marginBottom: 6
                  }}>
                    {[`📍 ${cards[0].city}`, cards[0].region, cards[0].religion].map((tag) => (
                      <span key={tag} style={{
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 10px', borderRadius: 50,
                        fontSize: 11, fontWeight: 600,
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    fontSize: 12, color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {cards[0].bio}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Action buttons */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 16,
        padding: '12px 0 8px'
      }}>
        {[
          { emoji: '✗', size: 60, shadow: 'rgba(139,26,26,0.2)', action: () => swipe('left') },
          { emoji: '⚡', size: 50, shadow: 'rgba(139,26,26,0.15)', action: () => {} },
          { emoji: '⭐', size: 50, shadow: 'rgba(212,175,55,0.25)', action: () => router.push('/match') },
          { emoji: '❤️', size: 60, shadow: 'rgba(45,106,79,0.2)', action: () => swipe('right') },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            style={{
              width: btn.size, height: btn.size,
              borderRadius: '50%', background: 'white',
              border: 'none', cursor: 'pointer',
              fontSize: btn.size === 60 ? 26 : 22,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 20px ${btn.shadow}`,
              transition: 'transform 0.2s'
            }}
          >
            {btn.emoji}
          </button>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon">🔥</div>
          <div className="nav-label">Discover</div>
        </div>
        <div className="nav-item" onClick={() => router.push('/matches')}>
          <div className="nav-icon">💛</div>
          <div className="nav-label">Matches</div>
        </div>
        <div className="nav-item" onClick={() => router.push('/matches')}>
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