import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma</b>: {game.details.system} <br />
          <b>Desenvolvedor</b>: {game.details.developer} <br />
          <b>Editora</b>: {game.details.publisher}
          <br />
          <b>Idiomas</b>: O jogo oferece suporte a diversos idiomas, incluindo
          Inglês, Espanhol, Francês, Holandês, Italiano, Português brasileiro,
          Português, Russo, Árabe
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
