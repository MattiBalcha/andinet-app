export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #6B0F0F, #8B1A1A 45%, #1A0A0A)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif'
    }}>
      <div style={{
        width: 110, height: 110,
        background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 52, marginBottom: 28,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>💛</div>
      <div style={{fontSize: 52, color: '#D4AF37', letterSpacing: 4, marginBottom: 8}}>ፍቅር</div>
      <div style={{fontSize: 28, color: 'rgba(255,255,255,0.85)', marginBottom: 12, fontStyle: 'italic'}}>Fiqir</div>
      <div style={{fontSize: 13, color: 'rgba(212,175,55,0.7)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 48}}>Habesha Love, Rooted in Culture</div>
      <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', marginBottom: 48}}></div>
      <button style={{
        background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
        color: '#1A1A1A', border: 'none',
        padding: '16px 48px', borderRadius: 50,
        fontSize: 15, fontWeight: 600,
        letterSpacing: 1.5, textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: '0 8px 32px rgba(212,175,55,0.4)'
      }}>ጀምር · Get Started</button>
      <div style={{marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.3)'}}>andinet.app — coming soon</div>
    </main>
  )
}