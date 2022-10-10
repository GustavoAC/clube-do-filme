import React from 'react'
import { calcAvgScore } from '../../App';
import movies from '../../data/movies';

import './FinalScoresView.css';

const FinalScoresView = () => {
  const moviesValues = Object.values(movies).sort((movieA, movieB) => calcAvgScore(movieB) - calcAvgScore(movieA));
  return (
    <div className='finalScoresView'>
      <div className='content'>
        <span className='header'>Pontuações Finais:</span>
        <table>
          {moviesValues.map(movie => (<tr key={movie.title}>
            <td>{movie.title}</td>
            {movie.scores.map((score, index) => <td key={index}>{score}</td>)}
          </tr>))}
        </table>
      </div>

      <div className='extraCredits'>
        <span>
          Agradecimentos especiais:<br />
          https://makefrontendshitagain.party/<br />
          https://www.cameronsworld.net/<br />
          https://www.gifs-animados.net/<br />
          https://gifcities.org/<br />
        </span>
        <span>
          Até o próximo show!
        </span>
      </div>
    </div>
  )
}

export default FinalScoresView