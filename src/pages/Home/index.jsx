import Drinks from "../../components/Drinks"
import Header from "../../components/Header"
import {useContext} from "react"
import {DrinksContext} from "../../Providers/drinks"

const Home = ()=> {
  const {drinks} = useContext(DrinksContext)
  return(
    <>
    <Header title="Drinks"/>
    <Drinks drinks={drinks}/>
    </>
  )
}

export default Home