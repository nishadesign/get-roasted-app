import React, { useState, useEffect } from 'react';
import { Flame, Trash2, Users } from 'lucide-react';
import UploadZone from './components/UploadZone';
import DesignCard from './components/DesignCard';
import './App.css';

function App() {
  const [designs, setDesigns] = useState([]);
  const [stats, setStats] = useState({
    totalDesigns: 0,
    totalRoasts: 0,
    teamMood: 'Ready to roast! 🔥'
  });

  // Load designs from localStorage on component mount
  useEffect(() => {
    const savedDesigns = localStorage.getItem('designRoastApp_designs');
    if (savedDesigns) {
      const parsedDesigns = JSON.parse(savedDesigns);
      setDesigns(parsedDesigns);
      updateStats(parsedDesigns);
    }
  }, []);

  // Save designs to localStorage whenever designs change
  useEffect(() => {
    localStorage.setItem('designRoastApp_designs', JSON.stringify(designs));
    updateStats(designs);
  }, [designs]);

  const updateStats = (designList) => {
    const totalRoasts = designList.filter(design => design.roast).length;
    const moods = [
      'Feeling spicy! 🌶️',
      'Ready to roast! 🔥',
      'Design critics unite! 👥',
      'Constructive chaos! 🎨',
      'Feedback frenzy! ⚡',
      'Roast mode: ON! 🚀'
    ];
    
    setStats({
      totalDesigns: designList.length,
      totalRoasts,
      teamMood: moods[Math.floor(Math.random() * moods.length)]
    });
  };

  const handleImageUpload = (imageData) => {
    setDesigns(prevDesigns => [imageData, ...prevDesigns]);
  };

  const handleDeleteDesign = (designId) => {
    setDesigns(prevDesigns => prevDesigns.filter(design => design.id !== designId));
  };

  const handleUpdateRoast = (designId, roast) => {
    setDesigns(prevDesigns => 
      prevDesigns.map(design => 
        design.id === designId 
          ? { ...design, roast }
          : design
      )
    );
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all designs? This cannot be undone!')) {
      setDesigns([]);
      localStorage.removeItem('designRoastApp_designs');
    }
  };


  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <Flame className="logo-icon" size={32} />
            <h1 className="app-title">Get Roasted</h1>
            <span className="app-subtitle">Internal UX Team Fun Zone</span>
          </div>
          
          <div className="stats-section">
            <div className="stat-item">
              <span className="stat-number">{stats.totalDesigns}</span>
              <span className="stat-label">Designs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.totalRoasts}</span>
              <span className="stat-label">Roasts</span>
            </div>
            <div className="team-mood">
              <Users size={16} />
              <span>{stats.teamMood}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="welcome-section">
            <h2 className="welcome-title">
              Welcome to Get Roasted!
            </h2>
            <p className="welcome-text">
              Upload your designs and get hilariously honest (but constructive) feedback. We roast because we care!
            </p>
          </div>

          <UploadZone onImageUpload={handleImageUpload} />

          {designs.length > 0 && (
            <div className="gallery-section">
              <div className="gallery-header">
                <h3 className="gallery-title">
                  Design Gallery ({designs.length})
                </h3>
                <div className="gallery-actions">
                  <button 
                    className="action-btn clear-btn"
                    onClick={handleClearAll}
                    title="Clear all designs"
                  >
                    <Trash2 size={16} />
                    Clear All
                  </button>
                </div>
              </div>

              <div className="designs-grid">
                {designs.map(design => (
                  <DesignCard
                    key={design.id}
                    design={design}
                    onDelete={handleDeleteDesign}
                    onUpdateRoast={handleUpdateRoast}
                  />
                ))}
              </div>
            </div>
          )}

          {designs.length === 0 && (
            <div className="empty-state">
              <Flame size={64} className="empty-icon" />
              <h3 className="empty-title">No designs yet!</h3>
              <p className="empty-text">
                Upload your first design to get the roasting party started!
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Made with love and a healthy dose of constructive criticism for the UX team</p>
      </footer>
    </div>
  );
}

export default App;
