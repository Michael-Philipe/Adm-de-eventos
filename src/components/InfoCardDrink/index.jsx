import { useContext } from "react"
import { InfoDrinkContext } from "../../Providers/infoDrink"
import { InfoDrinkContainer, InfoDrink } from "./styles"

const InfoCardDrink = () => {

  const {drink} = useContext(InfoDrinkContext)
console.log(drink)
  return(
    <>
<InfoDrinkContainer>
 <div>
   <img src={drink.image_url} alt="" />
 </div>
 <InfoDrink>
   <aside>
     <h1>{drink.name}</h1>
     <span></span>
     <h3></h3>
     <p>{drink.description}</p>
   </aside>
 </InfoDrink>

</InfoDrinkContainer>
    </>
  )
}

export default InfoCardDrink