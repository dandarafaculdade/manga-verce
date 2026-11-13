
import { personagens } from '../data/personagens'
import CardPersonagem from './CardPersonagem'

function ListaPersonagens() {
  return (
    <section id="personagens" className="personagens">
      <h2>Personagens em Destaque</h2>
      <p>Conheça personagens marcantes dos mangás.</p>

      <div className="grade-personagens">
        {personagens.map((personagem) => (
          <CardPersonagem
            key={personagem.id}
            personagem={personagem}
          />
        ))}
      </div>
    </section>
  )
}

export default ListaPersonagens
