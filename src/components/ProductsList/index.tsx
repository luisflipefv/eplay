import Game from '../../models/Games'
import Product from '../Product'

import { List, Container } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
