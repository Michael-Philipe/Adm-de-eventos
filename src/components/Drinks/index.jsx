import { useContext, useState } from "react"
import { DrinksContext } from "../../Providers/drinks"
import CardDrink from "../CardDrink"
import InfoCardDrink from "../InfoCardDrink"
import styles from "./styles.css"


const Drinks = () => {

  const {drinks} = useContext(DrinksContext)
  const [showInfo, setShowInfo] = useState(false)


  return(
    <main className="drinks-container">
     {drinks.map((drink) => <CardDrink key={drink.id} image={drink.image_url} name={drink.name} fabrication={drink.first_brewed} description={drink.description} qtdLitres={drink.volume} currentDrink={drink} setShowInfo={setShowInfo}/>)}
      {showInfo && <InfoCardDrink/>}
    </main>
  )
}
export default Drinks