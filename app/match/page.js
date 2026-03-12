'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import '../globals.css'

export default function Match() {
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
      background: 'linear-gradient(160deg, #4A0A0A, #8B1A1A 40%, #2A0A2A)',
      minHeight: '100vh', overflow: 'hidden'
    }}>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(900px) rotate(720deg); opacity: 0; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.25); }
        }
        @keyframes popin {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Confetti */}
      {particles.map((p) => (
        <div key={p.id} style={{
          position: 'absolute', left: `${p.left}%`, top: 0,
          width: p.width, height: p.height,
          background: p.color, borderRadius: 2,
          animation: `fall ${p.duration}s ease-in ${p.delay}s infinite`,
          pointerEvents: 'none', zIndex: 1
        }} />
      ))}

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 28px', position: 'relative',
        zIndex: 2, minHeight: '100vh'
      }}>

        {/* Title */}
        <div style={{
          textAlign: 'center', marginBottom: 28,
          animation: 'popin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both'
        }}>
          <div style={{
            fontSize: 12, letterSpacing: 4,
            textTransform: 'uppercase',
            color: 'var(--gold)', fontWeight: 600,
            marginBottom: 8
          }}>
            ✨ It's a match ✨
          </div>
          <div style={{
            fontFamily: 'Georgia, serif', fontSize: 48,
            fontStyle: 'italic', color: 'white',
            lineHeight: 1, marginBottom: 6
          }}>
            ፍቅር!
          </div>
          <div style={{
            fontFamily: 'Georgia, serif', fontSize: 18,
            color: 'var(--gold)', fontStyle: 'italic'
          }}>
            You & Selamawit liked each other
          </div>
        </div>

        {/* Avatars */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24, position: 'relative',
          animation: 'popin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both'
        }}>
          <div style={{
            width: 110, height: 110, borderRadius: '50%',
            border: '4px solid white',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 52,
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
            zIndex: 2
          }}>
            👤
          </div>
          <div style={{
            position: 'absolute',
            left: '50%', top: '50%',
            animation: 'heartbeat 1s ease-in-out infinite',
            fontSize: 28, zIndex: 5,
            filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.8))'
          }}>
            💛
          </div>
          <div style={{
            width: 110, height: 110, borderRadius: '50%',
            border: '4px solid white',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 52,
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            background: 'linear-gradient(135deg, var(--cream2), var(--gold))',
            marginLeft: -20, zIndex: 1
          }}>
            👩
          </div>
        </div>

        {/* Details */}
        <div style={{
          fontSize: 14, color: 'rgba(255,255,255,0.6)',
          textAlign: 'center', marginBottom: 32,
          lineHeight: 1.6
        }}>
          <strong style={{ color: 'white' }}>Selamawit</strong> is verified ✅ · Orthodox ✝️ · Washington DC 📍
          <br />
          You both want a <strong style={{ color: 'white' }}>serious relationship</strong>
        </div>

        {/* Buttons */}
        <button
          className="btn-gold"
          onClick={() => router.push('/chat')}
        >
          💬 Send a Message Now
        </button>

        <button
          onClick={() => router.push('/discover')}
          style={{
            width: '100%', marginTop: 12,
            background: 'rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.7)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            padding: 15, borderRadius: 16,
            fontFamily: 'inherit', fontSize: 14,
            fontWeight: 500, cursor: 'pointer'
          }}
        >
          Keep Discovering ↓
        </button>

      </div>
    </div>
  )
}