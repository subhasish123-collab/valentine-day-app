import FloatingHearts from '@/components/FloatingHearts';
import LoveTimeline from '@/components/LoveTimeline';
import MessageCard from '@/components/MessageCard';
import PhotoGallery from '@/components/PhotoGallery';
import './page.css';

export default function Home() {
  return (
    <main className="main">
      <FloatingHearts />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="heart-burst">💖</div>
          <h1 className="hero-title">
            Happy Valentine&apos;s Day
          </h1>
          <p className="hero-subtitle">To My Amazing Girlfriend</p>
          <div className="hero-message">
            <p className="script-text">
              You are the sunshine in my morning,<br />
              the stars in my night,<br />
              and the love of my life. ✨
            </p>
          </div>
          <div className="heart-divider">
            <span>❤️</span>
            <span>💕</span>
            <span>💖</span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <LoveTimeline />

      {/* Messages Section */}
      <MessageCard />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Final Message */}
      <section className="final-message">
        <div className="container">
          <div className="final-card">
            <div className="sparkles">✨ ⭐ 💫 ✨</div>
            <h2 className="final-title gradient-text">Forever Yours</h2>
            <p className="final-text">
              Thank you for being my partner, my best friend, and my everything.
              Every day with you is a gift, and I can&apos;t wait to create more
              beautiful memories together. I love you more than words can express.
            </p>
            <div className="signature">
              <p className="signature-text">With all my love,</p>
              <p className="signature-name">Subhasish</p>
            </div>
            <div className="sparkles">💝 💕 💖 💝</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💖 for you • Valentine&apos;s Day {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
