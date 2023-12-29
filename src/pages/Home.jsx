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
        <MovieCard
          link="https://embedder.net/e/tt14614892/"
          title="Dragon Ball Super: Super Hero"
        />
        <MovieCard link="https://embedder.net/e/tt0816692/" title="Interestelar" />
        <MovieCard link="https://embedder.net/e/tt1285016/" title="A Rede Social" />
        <MovieCard link="https://embedder.net/e/tt4154796/" title="Vingadores: Ultimato" />
        <MovieCard link="https://embedder.net/e/tt4154756/" title="Vingadores: Guerra Infinita" />
        <MovieCard link="https://embedder.net/e/tt2395427/" title="Vingadores: Era de Ultron" />
        <MovieCard link="https://embedder.net/e/tt0848228/" title="Os Vingadores: The Avengers" />
        <MovieCard link="https://embedder.net/e/tt1392170/" title="Jogos Vorazes" />
        <MovieCard link="https://embedder.net/e/tt1951264/" title="Jogos Vorazes: Em Chamas" />
        <MovieCard
          link="https://embedder.net/e/tt1951265/"
          title="Jogos Vorazes: A Esperança - Parte 1"
        />
        <MovieCard
          link="https://embedder.net/e/tt1951266/"
          title="Jogos Vorazes: A Esperança - O Final"
        />
        <MovieCard
          link="https://embedder.net/e/tt10545296/"
          title="Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes"
        />
      </div>
    </div>
  );
};

export default Home;
