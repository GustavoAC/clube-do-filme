import React from 'react'
import PositionRenderer from '../../components/positionRenderer/PositionRenderer';

import './MovieView.css';

export type Movie = {
  className: string;
  position: number;
  title: string;
  mainImage: string;
  submitter: string; 
  scores: number[];
  gifs: {
    url: string;
    posTop: string;
    posLeft: string;
    height?: string;
  }[];
}

const MovieView: React.FC<Movie> = ({className, position, title, mainImage, submitter, scores, gifs}) => {
  const score = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 100) / 100;

  return (
    <div className={`movieView ${className}`}>
      <div className='gifLayer'>
        {gifs.map(gif => <img alt={gif.url} src={gif.url} key={gif.url} style={{top: gif.posTop + '%', left: gif.posLeft + '%', height: gif.height + '%'}} />)}
      </div>
      <div className='content'>
      <div className='header'>
        <div className='titleContainer'>
          <PositionRenderer position={position} />
          <span className='title'>{title}</span>
        </div>
        <span className='score'>{score}</span>
      </div>
      <div className='picture' style={{backgroundImage: `url(${mainImage})`}} />
      <div className='submitter'>
        <span>by {submitter}</span>
      </div>
      </div>
    </div>
  );
}

export default MovieView