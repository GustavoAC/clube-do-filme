import MovieView, { Movie } from './views/MovieView/MovieView';
import HomeView from './views/HomeView/HomeView';
import KindestView from './views/KindestView/KindestView';
import PrizeView from './views/PrizeView/PrizeView';

import './App.css';

import movies from "./data/movies";
import prizes from './data/prizes';
import FinalScoresView from './views/FinalScoresView/FinalScoresView';
import MemoirView from './views/MemoirView/MemoirView';

export function calcAvgScore(movie: Movie) {
  return movie.scores.reduce((a, b) => a + b, 0) / movie.scores.length;
}

function App() {
  const moviesOrdered = Object.values(movies).sort((movieA, movieB) => calcAvgScore(movieA) - calcAvgScore(movieB));
  let currPos = moviesOrdered.length;

  let movieIndex = 0;
  let prizeIndex = 0;
  
  const elements: JSX.Element[] = [];

  while (movieIndex < (moviesOrdered.length - 1) && prizeIndex < prizes.length) {
    if (movieIndex < (moviesOrdered.length - 1)) {
      const movie = moviesOrdered[movieIndex++];
      elements.push(<MovieView {...movie} position={currPos--} key={movie.title} />);
    }

    if (prizeIndex < prizes.length) {
      const prize = prizes[prizeIndex++];
      elements.push(<PrizeView {...prize} key={prize.title} />);
    }
  }

  // Extra at 1/3 and 2/3
  elements.splice(Math.floor(elements.length / 3), 0, <KindestView />);
  elements.splice(Math.floor(elements.length * 2 / 3), 0, <MemoirView />);

  // Always first place last
  const lastMovie = moviesOrdered[moviesOrdered.length - 1];
  elements.push(<MovieView {...lastMovie} position={currPos--} key={lastMovie.title} />);

  return (
    <div>
      <HomeView />
      {elements}
      <FinalScoresView />
    </div>
  );
}

export default App;
