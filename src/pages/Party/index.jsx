import Drinks from "../../components/Drinks"
import Header from "../../components/Header"
import { useContext } from 'react'
import { PartyCartContext } from "../../Providers/party"

const Party = () => {

  const {partyCart} = useContext(PartyCartContext)
  
  return(
    <>
    <Header title="PartyCart"/>
    <Drinks drinks={partyCart.cart}/>
    </>
  )
}
export default Party