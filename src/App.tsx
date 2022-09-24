import MovieView from './views/MovieView/MovieView';
import './App.css';

import movies from "./data/movies";

function App() {

  const moviesOrdered = Object.values(movies).sort((movieA, movieB) => movieB.position - movieA.position);

  return (
    <>
      {moviesOrdered.map(movie =>
        <MovieView {...movie} key={movie.title} />
      )}
    </>
  );
}

export default App;
