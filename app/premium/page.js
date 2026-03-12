'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../globals.css'

const plans = [
  {
    id: 'standard',
    name: '✨ Standard',
    price: '$8',
    period: 'per month',
    features: [
      { icon: '✓', color: '#4ADE80', text: 'Unlimited likes & matches' },
      { icon: '✓', color: '#4ADE80', text: 'See who liked you' },
      { icon: '✓', color: '#4ADE80', text: 'Advanced cultural filters' },
      { icon: '✓', color: '#4ADE80', text: 'Read receipts' },
    ],
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: 'rgba(255,255,255,0.12)'
    }
  },
  {
    id: 'gold',
    name: '🔥 Gold',
    price: '$15',
    period: 'per month',
    popular: true,
    features: [
      { icon: '★', color: 'var(--gold)', text: 'Everything in Standard' },
      { icon: '★', color: 'var(--gold)', text: '5 Profile boosts/month' },
      { icon: '★', color: 'var(--gold)', text: 'Incognito mode' },
      { icon: '★', color: 'var(--gold)', text: 'Travel mode (Ethiopia access)' },
      { icon: '★', color: 'var(--gold)', text: '5 Super likes per day' },
    ],
    style: {
      background: 'linear-gradient(135deg, #2A1010, #3A1A1A)',
      border: 'var(--gold)'
    }
  },
  {
    id: 'annual',
    name: '🌿 Gold Annual',
    price: '$9',
    period: '/mo · billed yearly',
    save: '💚 Save 40%',
    features: [
      { icon: '✓', color: '#4ADE80', text: 'All Gold features included' },
      { icon: '✓', color: '#4ADE80', text: 'Free event ticket every month' },
    ],
    style: {
      background: 'linear-gradient(135deg, #0A1A0A, #152A15)',
      border: 'var(--green)'
    }
  },
]

export default function Premium() {
  const router = useRouter()
  const [selected, setSelected] = useState('gold')

  return (
    <div className="phone-wrap" style={{
      background: 'linear-gradient(160deg, #0A0505, #1A0808 40%, #0A0A0A)',
      minHeight: '100vh'
    }}>
      <div className="status-bar" style={{ color: 'rgba(212,175,55,0.7)' }}>
        <span>9:41</span>
        <span
          onClick={() => router.push('/profile')}
          style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: 16 }}
        >
          ← Back
        </span>
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', padding: '60px 24px 16px', flexShrink: 0 }}>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
        <div style={{
          fontSize: 48, marginBottom: 12,
          display: 'inline-block',
          animation: 'float 3s ease-in-out infinite'
        }}>
          👑
        </div>
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 28,
          color: 'white', marginBottom: 4
        }}>
          Fiqir{' '}
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
            Premium
          </span>
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
          Find your match faster
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px' }}>

        {/* Plans */}
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelected(plan.id)}
            style={{
              borderRadius: 20, padding: '18px 20px',
              cursor: 'pointer', position: 'relative',
              overflow: 'hidden', marginBottom: 12,
              background: plan.style.background,
              border: `2px solid ${selected === plan.id ? plan.style.border : 'transparent'}`,
              boxShadow: selected === plan.id && plan.popular
                ? '0 8px 32px rgba(212,175,55,0.2)' : 'none',
              transition: 'all 0.2s',
              transform: selected === plan.id ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div style={{
                position: 'absolute', top: -1, right: 20,
                background: 'var(--gold)', color: 'var(--char)',
                fontSize: 10, fontWeight: 800,
                letterSpacing: 1, padding: '4px 12px',
                borderRadius: '0 0 10px 10px',
                textTransform: 'uppercase'
              }}>
                Most Popular
              </div>
            )}

            {/* Price row */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: 12
            }}>
              <div style={{
                fontSize: 16, fontWeight: 700, color: 'white'
              }}>
                {plan.name}
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'Georgia, serif', fontSize: 26,
                  color: 'var(--gold)', fontWeight: 700
                }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                  {plan.period}
                </div>
                {plan.save && (
                  <div style={{
                    fontSize: 10, color: '#4ADE80',
                    fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: 0.5
                  }}>
                    {plan.save}
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            {plan.features.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center',
                gap: 8, fontSize: 12,
                color: 'rgba(255,255,255,0.65)',
                marginBottom: 6
              }}>
                <span style={{ color: f.color, width: 16, textAlign: 'center' }}>
                  {f.icon}
                </span>
                {f.text}
              </div>
            ))}
          </div>
        ))}

        {/* Matchmaker card */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A0A, #2A2A10)',
          border: '2px solid rgba(212,175,55,0.4)',
          borderRadius: 20, padding: '18px 20px',
          marginBottom: 20, cursor: 'pointer',
          transition: 'all 0.2s'
        }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 12, marginBottom: 10
          }}>
            <span style={{ fontSize: 32 }}>👰</span>
            <div>
              <div style={{
                fontSize: 15, fontWeight: 700,
                color: 'var(--gold)'
              }}>
                Habesha Matchmaker
              </div>
              <div style={{
                fontSize: 12, color: 'rgba(255,255,255,0.45)',
                marginTop: 2
              }}>
                Human-curated · $75/month
              </div>
            </div>
          </div>
          <div style={{
            fontSize: 12, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6
          }}>
            A real Habesha matchmaking expert personally selects
            3 highly compatible matches per week just for you.
          </div>
        </div>

        {/* CTA */}
        <button className="btn-gold">
          Start 7-Day Free Trial 🎉
        </button>

        <div style={{
          textAlign: 'center', fontSize: 12,
          color: 'rgba(255,255,255,0.3)',
          marginTop: 12, lineHeight: 1.6
        }}>
          Cancel anytime. No charges for{' '}
          <span style={{ color: 'var(--gold)' }}>7 days</span>.
        </div>

        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}