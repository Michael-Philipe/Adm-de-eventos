import { useContext, useState } from "react"
import { DrinksContext } from "../../Providers/drinks"
import CardDrink from "../CardDrink"
import InfoCardDrink from "../InfoCardDrink"
import styles from "./styles.css"


const Drinks = ({drinks}) => {

 
  const [showInfo, setShowInfo] = useState(false)

 const closeInfo =()=> setShowInfo(false)



  return(
    <main className="drinks-container">
      <img className="gif1" src="https://i.pinimg.com/originals/45/59/6a/45596ae62127f3e65fc2c38acfb507f0.gif"/>
      <img className="gif2" src="https://cdn.dribbble.com/users/28758/screenshots/1224155/fff8_nites_gif.gif" alt="" />

     {drinks.length === 0 ? <img src="https://ariya.events/wp-content/uploads/2020/07/ariya-empty-cart.png"/> : drinks.map((drink) => <CardDrink key={drink.id} image={drink.image_url} name={drink.name} fabrication={drink.first_brewed} description={drink.description} qtdLitres={drink.volume} currentDrink={drink} setShowInfo={setShowInfo}/>)}
      {showInfo && <InfoCardDrink close={closeInfo}/>}
    </main>
  )
}
export default Drinks