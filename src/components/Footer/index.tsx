import { Container, SectionTitle, FooterSection, Link, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-play Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
