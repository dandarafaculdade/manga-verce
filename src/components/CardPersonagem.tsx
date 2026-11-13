
import type { Personagem } from '../data/tipos'

type CardPersonagemProps = {
  personagem: Personagem
}

function CardPersonagem({ personagem }: CardPersonagemProps) {
  return (
    <article className="card-personagem">
      <div className="imagem-personagem">
        <img
          src={personagem.imagem}
          alt={personagem.nome}
        />
      </div>

      <div className="informacoes-personagem">
        <h3>{personagem.nome}</h3>
        <p>
          <strong>Mangá:</strong> {personagem.manga}
        </p>
      </div>
    </article>
  )
}

export default CardPersonagem
