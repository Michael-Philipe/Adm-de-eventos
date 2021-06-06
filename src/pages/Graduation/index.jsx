import Header from "../../components/Header"
import { useContext } from "react"
import { GraduationCartContext } from "../../Providers/graduation"
import Drinks from "../../components/Drinks"

const Graduation = () => {
  
  const {graduationCart} = useContext(GraduationCartContext)
  
  return(
    <>
   <Header title="GraduationCart"/>
   <Drinks drinks={graduationCart.cart}/>
   </>
  )
}
export default Graduation