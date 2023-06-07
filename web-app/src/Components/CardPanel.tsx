import React from 'react';
import '../CSS/cardPanel.css';

type PanelProps = {
  environnementScore: number;
  ethicalScore: number;
  brandDescription: string;
  environnementDescription: string;
  ethicalDescription: string;
};

export function CardPanel(props: PanelProps) {
  const CardPanel = {
    borderRadius: '10px',
    width: '212px',
    height: '439px',
    color: 'black',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    backgroundColor: 'white',
  };

  function getProgressBarColor(scoreValue: number) {
    const red = (200 * scoreValue) / 100;
    const green = (255 * (100 - scoreValue)) / 100;
    return `rgb(${green}, ${red}, 0)`;
  }

  return (
    <div style={CardPanel}>
      <div className="description-container">
        <div className="description">{props.brandDescription}</div>
        <button className="redirect-button">Voir l’article</button>
      </div>
      <div className="score-container">
        <h1 className="score-title">Environnement</h1>
        <div className="score-value-container">
          <h3 className="score-font">{props.environnementScore}</h3>
          <h3 className="score-percent-font">/100</h3>
          <div className="progress-bar">
            <div className="background-progress-bar">
              <div
                className="color-progress"
                style={{
                  width: `${props.environnementScore}%`,
                  background: getProgressBarColor(props.environnementScore),
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="score-description">{props.environnementDescription}</h3>
      </div>
      <div className="score-container">
        <h1 className="score-title">Ethique</h1>
        <div className="score-value-container">
          <h3 className="score-font">{props.ethicalScore}</h3>
          <h3 className="score-percent-font">/100</h3>
          <div className="progress-bar">
            <div className="background-progress-bar">
              <div
                className="color-progress"
                style={{
                  width: `${props.ethicalScore}%`,
                  background: getProgressBarColor(props.ethicalScore),
                }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="score-description">{props.ethicalDescription}</h3>
      </div>
    </div>
  );
}
