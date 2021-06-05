import { useContext } from "react"
import { DrinksContext } from "../../Providers/drinks"
import CardDrink from "../CardDrink"
import styles from "./styles.css"


const Drinks = () => {

  const { drinks } = useContext(DrinksContext)

  return(
    <main className="drinks-container">
     {drinks.map((drink) => <CardDrink key={drink.id} image={drink.image_url} name={drink.name} fabrication={drink.first_brewed} description={drink.description} qtdLitres={drink.volume}/>)}
    </main>
  )
}
export default Drinks