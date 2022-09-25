import MovieView from './views/MovieView/MovieView';
import HomeView from './views/HomeView/HomeView';

import './App.css';

import movies from "./data/movies";

function App() {
  const moviesOrdered = Object.values(movies).sort((movieA, movieB) => movieA.score - movieB.score);
  let currPos = moviesOrdered.length;

  return (
    <div>
      <HomeView />
      {moviesOrdered.map(movie =>
        <MovieView {...movie} position={currPos--} key={movie.title} />
      )}
    </div>
  );
}

export default App;
