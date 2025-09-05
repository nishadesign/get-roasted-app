import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Flame, Calendar, FileText, Trash2, RotateCcw, ZoomIn } from 'lucide-react';
import { generateRoast, generateRoastTitle } from '../roastGenerator';
import './DesignCard.css';

const DesignCard = ({ design, onDelete, onUpdateRoast }) => {
  const [isRoasting, setIsRoasting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Handle escape key to close preview
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showPreview) {
        setShowPreview(false);
      }
    };

    if (showPreview) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPreview]);

  const handleRoast = () => {
    setIsRoasting(true);
    
    // Add a slight delay for dramatic effect
    setTimeout(() => {
      const newRoast = {
        title: generateRoastTitle(),
        content: generateRoast(),
        timestamp: new Date().toISOString()
      };
      
      onUpdateRoast(design.id, newRoast);
      setIsRoasting(false);
    }, 1500);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="design-card">
      <div className="design-image-container">
        <img 
          src={design.url} 
          alt={design.name}
          className="design-image"
        />
        <div className="design-overlay">
          <button 
            className="zoom-btn"
            onClick={() => {
              console.log('Zoom button clicked, opening preview');
              setShowPreview(true);
            }}
            title="Preview image"
          >
            <ZoomIn size={16} />
          </button>
          <button 
            className="delete-btn"
            onClick={() => onDelete(design.id)}
            title="Delete design"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="design-info">
        <h3 className="design-name" title={design.name}>
          {design.name}
        </h3>
        
        <div className="design-meta">
          <span className="meta-item">
            <Calendar size={14} />
            {formatDate(design.uploadDate)}
          </span>
          <span className="meta-item">
            <FileText size={14} />
            {formatFileSize(design.size)}
          </span>
        </div>

        {design.roast ? (
          <div className="roast-section">
            <div className="roast-header">
              <h4 className="roast-title">{design.roast.title}</h4>
              <button 
                className="re-roast-btn"
                onClick={handleRoast}
                disabled={isRoasting}
                title="Get a new roast"
              >
                <RotateCcw size={14} className={isRoasting ? 'spinning' : ''} />
              </button>
            </div>
            <p className="roast-content">{design.roast.content}</p>
            <span className="roast-timestamp">
              Roasted {formatDate(design.roast.timestamp)}
            </span>
          </div>
        ) : (
          <button 
            className={`roast-btn ${isRoasting ? 'roasting' : ''}`}
            onClick={handleRoast}
            disabled={isRoasting}
          >
            <Flame size={16} className={isRoasting ? 'flickering' : ''} />
            {isRoasting ? 'Roasting...' : 'Roast This Design!'}
          </button>
        )}
      </div>

      {/* Image Preview Modal - Rendered as Portal */}
      {showPreview && createPortal(
        <div className="preview-modal" onClick={() => setShowPreview(false)}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="preview-close"
              onClick={() => setShowPreview(false)}
              title="Close preview"
            >
              ×
            </button>
            <img 
              src={design.url} 
              alt={design.name}
              className="preview-image"
            />
            <div className="preview-info">
              <h4>{design.name}</h4>
              <p>{formatFileSize(design.size)} • Uploaded {formatDate(design.uploadDate)}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default DesignCard;
