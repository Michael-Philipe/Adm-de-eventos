import {Link} from "react-router-dom"
import { useContext } from "react"
import { PartyCartContext } from "../../Providers/party"
import { GraduationCartContext } from "../../Providers/graduation"
import { WeddingCartContext } from "../../Providers/wedding"

import { HeaderContainer } from "./styles"

const Header = ({title}) => {
  const {partyCart} = useContext(PartyCartContext)
  const {graduationCart} = useContext(GraduationCartContext)
  const {weddingCart} = useContext(WeddingCartContext)

  return(
    <HeaderContainer>
      <div className="title">
        
      <h1>{title}</h1>
      </div>
      <div className="links-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        {partyCart.counter > 0 && <span>{partyCart.counter}</span>}
          <Link to="/party">Party</Link>
          </li>
        <li> 
          {graduationCart.counter > 0 && <span>{graduationCart.counter}</span>}
          <Link to="graduation">Graduation</Link>
        </li>
        <li> 
          {weddingCart.counter > 0 && <span>{weddingCart.counter}</span>}
          <Link to="wedding">Wedding</Link>
        </li>
      </ul>
      </div>
    </HeaderContainer>
  )
}

export default Header