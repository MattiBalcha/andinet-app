'use client'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import '../globals.css'

const initialMessages = [
  { id: 1, sent: false, text: 'ሰላም! 😊 Nice to match with you!', time: '9:32 AM' },
  { id: 2, sent: true, text: "ደህና ነሽ? I saw you're from DC too! ❤️", time: '9:35 AM' },
  { id: 3, sent: false, text: 'Doro wat!! Are you going to the DC Ethiopian New Year event? 🎉', time: '9:38 AM' },
]

const quickReplies = ['ሰላም! 👋', 'ደህና ነሽ?', 'Where are you from? 🇪🇹', 'Nice profile! ❤️']

export default function Chat() {
  const router = useRouter()
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(true)
  const messagesEnd = useRef(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text) => {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setTyping(false)

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sent: true, text: msg, time: 'Just now' }
    ])

    setTimeout(() => setTyping(true), 800)
    setTimeout(() => {
      setTyping(false)
      const replies = [
        'እኔም! I love Ethiopian food 😄',
        'Yes!! Are you going? 🎉',
        'ደህና ነኝ! What about you? 😊',
        'Aww thank you! ❤️ Your profile is great too!',
        'I am from Addis originally, been in DC 4 years now 🇪🇹',
      ]
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sent: false,
          text: replies[Math.floor(Math.random() * replies.length)],
          time: 'Just now'
        }
      ])
    }, 2500)
  }

  return (
    <div className="phone-wrap" style={{
      display: 'flex', flexDirection: 'column',
      height: '100vh', background: 'var(--gray)'
    }}>

      {/* Header */}
      <div style={{
        background: 'white',
        padding: '44px 20px 14px',
        display: 'flex', alignItems: 'center',
        gap: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        flexShrink: 0, zIndex: 5
      }}>
        <span
          onClick={() => router.push('/matches')}
          style={{
            fontSize: 20, cursor: 'pointer',
            color: 'var(--red)', padding: 4
          }}
        >
          ←
        </span>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 22,
          border: '2px solid var(--gold)', position: 'relative'
        }}>
          👩
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: 13, height: 13, background: '#22C55E',
            borderRadius: '50%', border: '2px solid white'
          }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 700 }}>
            Selamawit 🛡️
          </div>
          <div style={{
            fontSize: 12, color: '#22C55E',
            fontWeight: 500, display: 'flex',
            alignItems: 'center', gap: 4
          }}>
            <span style={{
              width: 7, height: 7,
              background: '#22C55E',
              borderRadius: '50%', display: 'inline-block'
            }} />
            Online now
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['📞', '🎥'].map((icon) => (
            <button key={icon} style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--gray)', border: 'none',
              cursor: 'pointer', fontSize: 16,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center'
            }}>
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Match banner */}
      <div style={{
        background: 'linear-gradient(135deg, #FFF8E8, #FFF0D4)',
        borderBottom: '1px solid var(--cream2)',
        padding: '12px 20px',
        display: 'flex', alignItems: 'center',
        gap: 10, flexShrink: 0
      }}>
        <span style={{ fontSize: 20 }}>💛</span>
        <div style={{
          flex: 1, fontSize: 12,
          color: 'var(--char2)', lineHeight: 1.5
        }}>
          You matched with <strong style={{ color: 'var(--red)' }}>Selamawit</strong> today!
          Both Orthodox ✝️ · Serious relationship
        </div>
      </div>

      {/* Quick replies */}
      <div style={{
        display: 'flex', gap: 8,
        padding: '8px 16px 0',
        overflowX: 'auto', scrollbarWidth: 'none',
        flexShrink: 0
      }}>
        {quickReplies.map((qr) => (
          <div
            key={qr}
            onClick={() => sendMessage(qr)}
            style={{
              padding: '7px 14px', borderRadius: 50,
              background: 'white',
              border: '1.5px solid var(--cream2)',
              fontSize: 12, fontWeight: 500,
              color: 'var(--char2)', cursor: 'pointer',
              whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'all 0.2s'
            }}
          >
            {qr}
          </div>
        ))}
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: 'auto',
        padding: '16px 16px 8px',
        display: 'flex', flexDirection: 'column', gap: 6
      }}>
        <div style={{
          textAlign: 'center', fontSize: 11,
          color: 'var(--gray2)', fontWeight: 600,
          letterSpacing: 1, textTransform: 'uppercase',
          margin: '8px 0'
        }}>
          Today
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 8,
              maxWidth: '85%',
              alignSelf: msg.sent ? 'flex-end' : 'flex-start',
              flexDirection: msg.sent ? 'row-reverse' : 'row'
            }}
          >
            {!msg.sent && (
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 14, flexShrink: 0
              }}>
                👩
              </div>
            )}
            <div>
              <div style={{
                padding: '11px 15px',
                borderRadius: 20,
                borderBottomRightRadius: msg.sent ? 6 : 20,
                borderBottomLeftRadius: msg.sent ? 20 : 6,
                background: msg.sent
                  ? 'linear-gradient(135deg, var(--red), #A02020)'
                  : 'white',
                color: msg.sent ? 'white' : 'var(--char)',
                fontSize: 14, lineHeight: 1.5,
                maxWidth: 230,
                boxShadow: msg.sent ? 'none' : '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                {msg.text}
              </div>
              <div style={{
                fontSize: 10, marginTop: 3,
                color: msg.sent ? 'var(--gray2)' : 'var(--gray2)',
                textAlign: msg.sent ? 'right' : 'left'
              }}>
                {msg.sent ? `✓✓ ${msg.time}` : msg.time}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            gap: 8, alignSelf: 'flex-start'
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 14
            }}>
              👩
            </div>
            <div style={{
              background: 'white', borderRadius: 20,
              borderBottomLeftRadius: 6,
              padding: '12px 16px',
              display: 'flex', gap: 4,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <style>{`
                @keyframes tb {
                  0%, 60%, 100% { transform: translateY(0); }
                  30% { transform: translateY(-8px); }
                }
              `}</style>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--gray2)',
                  animation: `tb 1.4s ease-in-out ${i * 0.2}s infinite`
                }} />
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEnd} />
      </div>

      {/* Input bar */}
      <div style={{
        background: 'white',
        borderTop: '1px solid var(--cream2)',
        padding: '12px 16px 28px',
        display: 'flex', alignItems: 'center',
        gap: 10, flexShrink: 0
      }}>
        <button style={{
          width: 38, height: 38, borderRadius: '50%',
          background: 'var(--gray)', border: 'none',
          cursor: 'pointer', fontSize: 18,
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0
        }}>
          📎
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              sendMessage()
            }
          }}
          placeholder="ይፃፉ · Type a message..."
          style={{
            flex: 1, background: 'var(--gray)',
            border: '1.5px solid transparent',
            borderRadius: 24, padding: '10px 16px',
            fontSize: 14, fontFamily: 'inherit',
            color: 'var(--char)', outline: 'none',
            transition: 'border-color 0.2s'
          }}
        />
        <button
          onClick={() => sendMessage()}
          style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--red), #A02020)',
            border: 'none', cursor: 'pointer',
            fontSize: 18, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(139,26,26,0.35)',
            flexShrink: 0, color: 'white'
          }}
        >
          ➤
        </button>
      </div>
    </div>
  )
}