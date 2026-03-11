'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import '../globals.css'

export default function Success() {
  const router = useRouter()
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const colors = ['#D4AF37', '#8B1A1A', '#2D6A4F', '#F0D060', '#FFB347']
    const p = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: 4 + Math.random() * 8,
      height: 4 + Math.random() * 8,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }))
    setParticles(p)
  }, [])

  return (
    <div className="phone-wrap" style={{
      background: 'linear-gradient(160deg, #0A2A1A, #1A4A2A, #0A1A0A)',
      minHeight: '100vh', overflow: 'hidden'
    }}>

      {/* Confetti */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(900px) rotate(720deg); opacity: 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.4); }
          50% { box-shadow: 0 0 0 16px rgba(212,175,55,0); }
        }
      `}</style>

      {particles.map((p) => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.left}%`,
          top: 0,
          width: p.width,
          height: p.height,
          background: p.color,
          borderRadius: 2,
          animation: `fall ${p.duration}s ease-in ${p.delay}s infinite`,
          pointerEvents: 'none',
          zIndex: 1
        }} />
      ))}

      <div style={{
        flex: 1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 28px',
        position: 'relative', zIndex: 2,
        minHeight: '100vh'
      }}>

        {/* Ring */}
        <div style={{
          width: 130, height: 130,
          borderRadius: '50%',
          border: '3px solid #D4AF37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 28,
          animation: 'glow 2s ease-in-out infinite'
        }}>
          <div style={{
            width: 106, height: 106,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 52
          }}>
            💛
          </div>
        </div>

        {/* Text */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 32,
          color: 'white', textAlign: 'center', marginBottom: 6
        }}>
          You're All Set!
        </div>

        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 22,
          color: '#D4AF37', textAlign: 'center',
          marginBottom: 16, fontStyle: 'italic'
        }}>
          እንኳን ደህና መጡ!
        </div>

        <div style={{
          fontSize: 14, color: 'rgba(255,255,255,0.5)',
          textAlign: 'center', lineHeight: 1.7,
          marginBottom: 40, maxWidth: 300
        }}>
          Your Fiqir profile is ready. Start discovering genuine Habesha connections near you and worldwide.
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 16,
          marginBottom: 40
        }}>
          {[
            { icon: '🛡️', label: 'Verified' },
            { icon: '💬', label: 'Amharic' },
            { icon: '🌍', label: 'Diaspora' },
          ].map((s) => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: 12, padding: '10px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 20 }}>{s.icon}</div>
              <div style={{
                fontSize: 11, color: 'rgba(255,255,255,0.5)',
                marginTop: 4, fontWeight: 600,
                letterSpacing: 1, textTransform: 'uppercase'
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn-gold"
          style={{ maxWidth: 320, width: '100%' }}
          onClick={() => router.push('/discover')}
        >
          Start Discovering ፍቅር →
        </button>

      </div>
    </div>
  )
}