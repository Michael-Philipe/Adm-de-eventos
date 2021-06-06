import Drinks from "../../components/Drinks"
import Header from "../../components/Header"
import {useContext} from "react"
import { WeddingCartContext } from "../../Providers/wedding"

const Wedding = () => {

const {weddingCart} = useContext(WeddingCartContext)
  return(
    <>
   <Header title="WeddingCart"></Header>
   <Drinks drinks={weddingCart.cart}/>
   </>
  )
}
export default Wedding