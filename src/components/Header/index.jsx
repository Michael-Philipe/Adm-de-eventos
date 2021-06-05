import { HeaderContainer } from "./styles"

const Header = ({title}) => {

  return(
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  )
}

export default Header