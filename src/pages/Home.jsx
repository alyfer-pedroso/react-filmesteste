import MovieCard from "../components/MovieCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home Page">
      <h2>Alguns Filmes</h2>
      <div className="cards-container">
        <MovieCard
          link="https://embedder.net/e/tt10872600/"
          title="Homem-Aranha: Sem Volta Para Casa"
        />
        <MovieCard link="https://embedder.net/e/tt14614892" title="Dragon Ball Super: Super Hero" />
        <MovieCard link="https://embedder.net/e/tt0816692" title="Interestelar" />
      </div>
    </div>
  );
};

export default Home;
