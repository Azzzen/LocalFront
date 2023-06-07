import React, { useState } from 'react';
import '../CSS/productCard.css';

type CardProps = {
  articleName: string;
  picture: string;
  logo: string;
  price: string;
  score: number;
  brand: string;
  isExpanded: boolean;
  onClick: () => void;
};

export function ProductCard(props: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardClick = () => {
    setIsExpanded(!isExpanded);
    props.onClick();
  };

  function getProgressBarColor(scoreValue: number) {
    const red = (200 * scoreValue) / 100;
    const green = (255 * (100 - scoreValue)) / 100;
    return `rgb(${green}, ${red}, 0)`;
  }

  return (
    <div className={`product-card ${props.isExpanded ? 'expanded' : ''}`} onClick={cardClick}>
      <img
        src={props.picture}
        alt="brand logo"
        width={'130px'}
        height={'90%'}
        style={{ borderRadius: '10px', margin: '10px' }}
      />
      <div className="card-content">
        <div className="card-title">
          <h3>{props.brand}</h3>
          <p>{props.articleName}</p>
        </div>
        <div className="score">
          <div className="score-number">
            <div className="score-product">{props.score}</div>
            <div className="score-percent">/100</div>
          </div>
          <div className="progress-bar">
            <div className="background-progress">
              <div
                className="color-progress"
                style={{ width: `${props.score}%`, background: getProgressBarColor(props.score) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand">
        <div className="brand-container">
          <img className="brand-image" src={props.logo} alt="brand logo" />
        </div>
        <div className="price">{props.price}</div>
      </div>
      <div> {props.isExpanded && <div className="expanded-content"></div>}</div>
    </div>
  );
}
