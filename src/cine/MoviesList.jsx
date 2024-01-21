import MovieCard from "./MovieCard";
import { getAllMovies } from "../data/movies";
export default function MoviesList() {
  const movies = getAllMovies();
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
