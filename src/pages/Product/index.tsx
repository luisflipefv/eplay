import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import zelda from '../../assets/images/zelda.png'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o Jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto
          ambientadono mundo introduzido pela primeira vez nos livros de Harry
          Potter. Embarque em uma jornada por lugares novos e familiares
          enquanto explora e descubra animais fantásticos, personalize seu
          personagem e crie poções, domine o lançamento de feitiços, aprimores
          talentos e torne-se o bruxo que deseja ser. Experimente Hogwarts da
          década de 1800. Seu personagem é um estudante com chave de um antigo
          segredo que ameaça destruir o mundo bruxo. Fça aliados, lute contra os
          bruxoos das trevas e decida o destino do mundo bruxo. Seu legado é o
          que você faz dele, viva o inesperado.
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma</b>: Playstation 5 <br />
          <b>Desenvolvedor</b>: Avalanche Software <br />
          <b>Editora</b>: Portkey Games, subsidiária da Warner Bros. Interactive
          Enterteiment
          <br />
          <b>Idiomas</b>: O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de audio e legenda podem ser ajustadas nas configurações do
          jogo
        </p>
      </Section>
      <Gallery name="Jogo Teste" defaultCover={zelda} />
    </>
  )
}

export default Product
