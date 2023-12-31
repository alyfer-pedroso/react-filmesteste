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
        <MovieCard link="https://embedder.net/e/tt2179136/" title="Sniper Americano" />
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
        <MovieCard link="https://embedder.net/e/tt0232500/" title="Velozes e Furiosos" />
        <MovieCard link="https://embedder.net/e/tt0322259/" title="+ Velozes + Furiosos" />
        <MovieCard
          link="https://embedder.net/e/tt0463985/"
          title="Velozes e Furiosos: Desafio em Tóquio"
        />
        <MovieCard link="https://embedder.net/e/tt1013752/" title="Velozes e Furiosos 4" />
        <MovieCard
          link="https://embedder.net/e/tt1596343/"
          title="Velozes & Furiosos 5: Operação Rio"
        />
        <MovieCard link="https://embedder.net/e/tt1905041/" title="Velozes & Furiosos 6" />
        <MovieCard link="https://embedder.net/e/tt2820852/" title="Velozes & Furiosos 7" />
        <MovieCard link="https://embedder.net/e/tt4630562/" title="Velozes & Furiosos 8" />
        <MovieCard
          link="https://embedder.net/e/tt6806448/"
          title="Velozes & Furiosos: Hobbs & Shaw"
        />
        <MovieCard link="https://embedder.net/e/tt5433138/" title="Velozes & Furiosos: 9" />
        <MovieCard link="https://embedder.net/e/tt5433140/" title="Velozes & Furiosos: 10" />
        <MovieCard
          link="https://embedder.net/e/tt13622688/"
          title="Percy Jackson e os Olimpianos: T1 Ep1"
        />
        <MovieCard
          link="https://embedder.net/e/tt22074564"
          title="Percy Jackson e os Olimpianos: T1 Ep2"
        />
        <MovieCard
          link="https://embedder.net/e/tt23751722"
          title="Percy Jackson e os Olimpianos: T1 Ep3"
        />
        <MovieCard
          link="https://embedder.net/e/tt4589218/"
          title="Five Nights at Freddy's - O Pesadelo Sem Fim"
        />
        <MovieCard link="https://embedder.net/e/tt6566576/" title="Rua do Medo: 1994 - Parte 1" />
        <MovieCard link="https://embedder.net/e/tt9701940/" title="Rua do Medo: 1978 - Parte 2" />
        <MovieCard link="https://embedder.net/e/tt9701942/" title="Rua do Medo: 1666 - Parte 3" />
        <MovieCard link="https://embedder.net/e/tt0217869/" title="Corpo Fechado" />
        <MovieCard link="https://embedder.net/e/tt4972582/" title="Fragmentado" />
        <MovieCard link="https://embedder.net/e/tt6823368/" title="Vidro" />
      </div>
    </div>
  );
};

export default Home;
