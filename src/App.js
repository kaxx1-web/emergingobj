import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [activeHistory, setActiveHistory] = useState(0);
  const videoSection = useRef(null);
  const historySection = useRef(null);

  const historyPoints = [
    { title: "Research Question", desc: "What caused our nomadic ancestors to settle, and why do we feel the need to move" },
    { title: "Research", desc: "Human transportation has undergone significant changes throughout history, driven by advancements in technology. What began as simple walking has evolved into the era of AI-driven vehicles.For hundreds and thousand years, people were nomadic. Staying in a place for mere hours before being on foot again. Eventually this lifestyle had changed." },
    { title: "Connect", desc: "Mapping hand motion to the travel interface.Creating a scenario for users to test out the area they want to visit without phsycially needing to be there." }
  ];

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-container">
      {/* SECTION 1: HERO */}
      <section className="panel hero">
        <nav className="nav">
          <button onClick={() => scroll(historySection)}>History</button>
          <button onClick={() => scroll(videoSection)}>Video</button>
        </nav>
        <div className="content">
          <h1 className="glow-text">PORTABLE TRAVEL</h1>
          <p>Hand-Tracking Documentation</p>
          <div className="scroll-indicator">Scroll to Begin</div>
        </div>
      </section>

      <section ref={historySection} className="panel history">
        <h1>Research & Development</h1>
        <div className="history-grid">
          {historyPoints.map((item, i) => (
            <div 
              key={i} 
              className={`history-card ${activeHistory === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveHistory(i)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: VIDEO PRESENTATION */}
      <section ref={videoSection} className="panel video-page">
        <h2>Video Documentation</h2>
        <div className="video-wrapper">
          <video controls poster="/thumbnail.jpg">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-caption">
            <p>Screen recording of TouchDesigner hand-tracking interface in action.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;