import React from 'react'
import PositionRenderer from '../../components/positionRenderer/PositionRenderer';
import { Movie } from '../MovieView/MovieView';

import clickHere1 from '../../data/gifs/click/clicka.gif';
import clickHere2 from '../../data/gifs/click/clickhere.gif';
import clickHere3 from '../../data/gifs/click/clickme.gif';

import './PrizeView.css';

const clickImgs = [clickHere1, clickHere2, clickHere3];

export type Prize = {
  title: string;
  subtitle: string;
  className: string;
  first: Movie;
  second: Movie;
  third: Movie;
  gifs: {
    url: string;
    posTop: string;
    posLeft: string;
    height?: string;
  }[];
}

const Element: React.FC<{position: number, movie: Movie, className: string}> = React.memo(({ position, movie, className }) => {
  const [isRevealed, setIsRevealed] = React.useState(false);

  const imgNumber = Math.floor(Math.random() * 3);

  return <div className={'prizeElement ' + className}>
    {isRevealed && <>
      <div className='prizePicture' style={{backgroundImage: `url(${movie.mainImage})`}} />
      <span>{movie.title}</span>
    </>}
    {!isRevealed && 
      <div onClick={() => setIsRevealed(true)} className='prizePreview' style={{backgroundImage: `url(${clickImgs[imgNumber]})`}} />
    }
    <PositionRenderer position={position}/>
  </div>
})

const PrizeView: React.FC<Prize> = ({ title, subtitle, className, first, second, third, gifs }) => {
  return (
    <div className={`prizeView ${className}`}>
      {gifs.length !== 0 && <div className='gifLayer'>
        {gifs.map(gif => <img alt={gif.url} src={gif.url} key={gif.url} style={{ top: gif.posTop + '%', left: gif.posLeft + '%', height: gif.height + '%' }} />)}
      </div>}
      <div className='content'>
        <div className='header'>
          <span className='title'>{title}</span>
          <span className='subtitle'>{subtitle}</span>
        </div>
        <div className='prizeContainer'>
          <Element position={2} movie={second} className="second"/>
          <Element position={1} movie={first} className="first"/>
          <Element position={3} movie={third} className="third"/>
        </div>
        {/* 
        <div className='picture' style={{ backgroundImage: `url(${mainImage})` }} />
        <div className='submitter'>
          <span>by {submitter}</span>
        </div> */}
      </div>
    </div>
  );
}

export default PrizeView;