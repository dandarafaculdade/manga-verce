
import './App.css'

function App() {
  return (
    <>
      <header className="cabecalho">
        <h1>MangaVerse</h1>

        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#mangas">Mangás</a>
          <a href="#personagens">Personagens</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="destaque">
          <h2>Explore o universo dos mangás</h2>

          <p>
            Descubra recomendações de mangás japoneses
            e conheça personagens de diferentes histórias.
          </p>
        </section>

        <section id="mangas" className="biblioteca">
          <h2>Biblioteca de Mangás</h2>
          <p>Confira nossas recomendações de leitura.</p>
        </section>

        <section id="personagens" className="personagens">
          <h2>Personagens em Destaque</h2>
          <p>Conheça personagens marcantes dos mangás.</p>
        </section>
      </main>

      <footer className="rodape">
        <p>MangaVerse — Recomendações de mangás japoneses</p>
      </footer>
    </>
  )
}

export default App
