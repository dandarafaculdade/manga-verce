
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

          <div className="grade-mangas">
            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/one-piece.jpg" alt="Capa do mangá One Piece" />
              </div>
              <div className="informacoes-manga">
                <h3>One Piece</h3>
                <p><strong>Autor:</strong> Eiichiro Oda</p>
                <p><strong>Gênero:</strong> Aventura</p>
                <p><strong>Ano:</strong> 1997</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/naruto.jpg" alt="Capa do mangá Naruto" />
              </div>
              <div className="informacoes-manga">
                <h3>Naruto</h3>
                <p><strong>Autor:</strong> Masashi Kishimoto</p>
                <p><strong>Gênero:</strong> Ação</p>
                <p><strong>Ano:</strong> 1999</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/dragon-ball.jpg" alt="Capa do mangá Dragon Ball" />
              </div>
              <div className="informacoes-manga">
                <h3>Dragon Ball</h3>
                <p><strong>Autor:</strong> Akira Toriyama</p>
                <p><strong>Gênero:</strong> Aventura</p>
                <p><strong>Ano:</strong> 1984</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/death-note.jpg" alt="Capa do mangá Death Note" />
              </div>
              <div className="informacoes-manga">
                <h3>Death Note</h3>
                <p><strong>Autores:</strong> Tsugumi Ohba e Takeshi Obata</p>
                <p><strong>Gênero:</strong> Suspense</p>
                <p><strong>Ano:</strong> 2003</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/attack-on-titan.jpg" alt="Capa do mangá Attack on Titan" />
              </div>
              <div className="informacoes-manga">
                <h3>Attack on Titan</h3>
                <p><strong>Autor:</strong> Hajime Isayama</p>
                <p><strong>Gênero:</strong> Ação</p>
                <p><strong>Ano:</strong> 2009</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/demon-slayer.jpg" alt="Capa do mangá Demon Slayer" />
              </div>
              <div className="informacoes-manga">
                <h3>Demon Slayer</h3>
                <p><strong>Autor:</strong> Koyoharu Gotouge</p>
                <p><strong>Gênero:</strong> Fantasia</p>
                <p><strong>Ano:</strong> 2016</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/jujutsu-kaisen.jpg" alt="Capa do mangá Jujutsu Kaisen" />
              </div>
              <div className="informacoes-manga">
                <h3>Jujutsu Kaisen</h3>
                <p><strong>Autor:</strong> Gege Akutami</p>
                <p><strong>Gênero:</strong> Ação</p>
                <p><strong>Ano:</strong> 2018</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/chainsaw-man.jpg" alt="Capa do mangá Chainsaw Man" />
              </div>
              <div className="informacoes-manga">
                <h3>Chainsaw Man</h3>
                <p><strong>Autor:</strong> Tatsuki Fujimoto</p>
                <p><strong>Gênero:</strong> Ação</p>
                <p><strong>Ano:</strong> 2018</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/fullmetal-alchemist.jpg" alt="Capa do mangá Fullmetal Alchemist" />
              </div>
              <div className="informacoes-manga">
                <h3>Fullmetal Alchemist</h3>
                <p><strong>Autora:</strong> Hiromu Arakawa</p>
                <p><strong>Gênero:</strong> Aventura</p>
                <p><strong>Ano:</strong> 2001</p>
              </div>
            </article>

            <article className="card-manga">
              <div className="capa-manga">
                <img src="/capas/bleach.jpg" alt="Capa do mangá Bleach" />
              </div>
              <div className="informacoes-manga">
                <h3>Bleach</h3>
                <p><strong>Autor:</strong> Tite Kubo</p>
                <p><strong>Gênero:</strong> Ação</p>
                <p><strong>Ano:</strong> 2001</p>
              </div>
            </article>
          </div>
        </section>

        <section id="personagens" className="personagens">
          <h2>Personagens em Destaque</h2>
          <p>Conheça personagens marcantes dos mangás.</p>

          <div className="grade-personagens">
            <article className="card-personagem">
              <div className="imagem-personagem">
                <img src="/personagens/luffy.jpg" alt="Monkey D. Luffy" />
              </div>
              <div className="informacoes-personagem">
                <h3>Monkey D. Luffy</h3>
                <p><strong>Mangá:</strong> One Piece</p>
              </div>
            </article>

            <article className="card-personagem">
              <div className="imagem-personagem">
                <img src="/personagens/naruto-uzumaki.jpg" alt="Naruto Uzumaki" />
              </div>
              <div className="informacoes-personagem">
                <h3>Naruto Uzumaki</h3>
                <p><strong>Mangá:</strong> Naruto</p>
              </div>
            </article>

            <article className="card-personagem">
              <div className="imagem-personagem">
                <img src="/personagens/goku.jpg" alt="Son Goku" />
              </div>
              <div className="informacoes-personagem">
                <h3>Son Goku</h3>
                <p><strong>Mangá:</strong> Dragon Ball</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>MangaVerse — Recomendações de mangás japoneses</p>
      </footer>
    </>
  )
}

export default App
