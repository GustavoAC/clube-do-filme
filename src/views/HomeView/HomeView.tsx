import React from 'react'
import DancingText from '../../components/dancingText/DancingText';
import cameronsworld from '../../data/cameronsworld.mp3';

import './HomeView.css';

const HomeView = () => {
  const currentSong = React.useRef<HTMLAudioElement>();

  const playAudio = () => {
    if (currentSong.current) {
      currentSong.current.pause();
      currentSong.current.src = '';
    }
    currentSong.current = new Audio(cameronsworld);
    currentSong.current.play();
    currentSong.current.loop = true;
  }

  return (
    <div className='homeView'>
      <button className='audioButton' onClick={playAudio}>TOCAR MUSIQUINHA</button>
      <DancingText text="Clube"/>
      <DancingText text="do"/>
      <DancingText text="Filme"/>
      <span className='subtitle'>PREMIAÇÃO DA SEGUNDA TEMPORADA</span>
    </div>
  )
}

export default HomeView;