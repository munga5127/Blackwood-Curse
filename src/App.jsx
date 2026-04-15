import React, { useState, useEffect, useRef } from 'react';
import { storyData } from './data/story';

function App() {
  const [currentPhaseId, setCurrentPhaseId] = useState(1);
  const [passcodeGuess, setPasscodeGuess] = useState("");
  const [errorHighlight, setErrorHighlight] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  useEffect(() => {
    const savedPhase = localStorage.getItem('mystery_phase');
    if (savedPhase) setCurrentPhaseId(parseInt(savedPhase));
  }, []);

  const unlockedPhases = storyData.phases.filter(p => p.id <= currentPhaseId);
  const currentPhaseIndex = storyData.phases.findIndex(p => p.id === currentPhaseId);
  const currentPhase = storyData.phases[currentPhaseIndex];

  const handleGuess = (e) => {
    e.preventDefault();
    if (!currentPhase.passcode) return;

    if (passcodeGuess.trim().toUpperCase() === currentPhase.passcode.toUpperCase()) {
      const nextPhaseId = currentPhase.id + 1;
      setCurrentPhaseId(nextPhaseId);
      localStorage.setItem('mystery_phase', nextPhaseId.toString());
      setPasscodeGuess("");
      setErrorHighlight(false);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      setErrorHighlight(true);
      setTimeout(() => setErrorHighlight(false), 500);
    }
  };

  return (
    <div className="app-container">
      <div className="audio-control">
        <button onClick={toggleAudio} className="btn-primary audio-btn">
          {isAudioPlaying ? '⏸ Stop Gramophone' : '▶ Play Gramophone'}
        </button>
      </div>
      <audio ref={audioRef} loop src="https://actions.google.com/sounds/v1/horror/ambient_hum.ogg" />
      <header className="site-header">
        <h1 className="typewriter site-title flicker">{storyData.title}</h1>
        <p className="site-description typewriter inline-flicker delay">{storyData.description}</p>
      </header>

      <div className="cards-container">
        {unlockedPhases.map((phase) => (
          <div key={phase.id} className="paper-card fade-in">
            <h2 className="file-title typewriter">{`File ${phase.id}: ${phase.name}`}</h2>
            <div className="typewriter file-content">
              {phase.content}
            </div>

            <div className="clues-container">
              {phase.clues.map((clue, cIdx) => (
                <div key={cIdx} className="clue-item">
                  {clue.type === 'text' && (
                    <blockquote className="quote-text">
                      {clue.content}
                    </blockquote>
                  )}
                  {clue.type === 'image' && (
                    <div className="clue-image-wrapper">
                      <img 
                        src={clue.src} 
                        alt={clue.alt} 
                        className={`clue-image ${cIdx % 2 === 0 ? '' : 'rotate-right'}`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {currentPhase && currentPhase.passcode && (
        <form onSubmit={handleGuess} className="unlock-form fade-in" key={`form-${currentPhaseId}`}>
          <div className="unlock-container">
            <div className="input-group">
              <label className="typewriter label-text">{currentPhase.puzzlePrompt}</label>
              <input 
                type="text"
                value={passcodeGuess}
                onChange={(e) => setPasscodeGuess(e.target.value)}
                placeholder="ENTER PASSCODE"
                className={`input-passcode ${errorHighlight ? 'error' : ''}`}
                autoComplete="off"
              />
              <p className="hint-text typewriter">Hint: {currentPhase.passcodeHint}</p>
            </div>
            <button type="submit" className="btn-primary">
              Unlock Request
            </button>
          </div>
        </form>
      )}

      {currentPhase && !currentPhase.passcode && (
        <div className="end-record typewriter flicker">
          --- END OF RECORD ---
          <div style={{ marginTop: '2rem', opacity: 0.6, fontSize: '0.85rem' }}>
            <p>Coded by Munga Muiruray</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
