import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Games'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, lançado no Japão como Biohazard 4 é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250'],
    image: resident
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, lançado no Japão como Biohazard 4 é um jogo eletrônico de survival horror...',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$250'],
    image: diablo
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, lançado no Japão como Biohazard 4 é um jogo eletrônico de survival horror...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$250'],
    image: starwars
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, lançado no Japão como Biohazard 4 é um jogo eletrônico de survival horror...',
    title: 'The Legend of Zelda',
    system: 'Nintendo Switch',
    infos: ['10%', 'R$250'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
    title: 'The Legend of Zelda',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starwars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
