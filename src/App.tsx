
import Cabecalho from './components/Cabecalho'
import ListaMangas from './components/ListaMangas'
import ListaPersonagens from './components/ListaPersonagens'
import Rodape from './components/Rodape'
import './App.css'

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <section id="inicio" className="destaque">
          <h2>Explore o universo dos mangás</h2>
          <p>
            Descubra recomendações de mangás japoneses
            e conheça personagens de diferentes histórias.
          </p>
        </section>

        <ListaMangas />

        <ListaPersonagens />
      </main>

      <Rodape />
    </>
  )
}

export default App
