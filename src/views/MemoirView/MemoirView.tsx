import React from 'react'

import thiaguin from './thiaguin.jpg';
import yurir from './yurir.jpeg';

import './MemoirView.css';

const MemoirView = () => {
  return (
    <div className='memoirView'>
        <span className='header'>Em Memória Àqueles Que Já Não Estão Mais Entre Nós</span>
        <div className='headstones'>
            <div>
                <img src={thiaguin} alt='thiaguin' />
                <span>Thiaguinho</span>
            </div>
            <div>
                <img src={yurir} alt='yurir' />
                <span>Yuri Não Linha</span>
            </div>
        </div>
        <span className='rip'>R.I.P.</span>
    </div>
  )
}

export default MemoirView