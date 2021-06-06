import { useContext } from "react"
import { GraduationCartContext } from "../../Providers/graduation"
import { InfoDrinkContext } from "../../Providers/infoDrink"
import { PartyCartContext } from "../../Providers/party"
import { WeddingCartContext } from "../../Providers/wedding"
import Button from "../Button"
import { InfoDrinkContainer, InfoDrink } from "./styles"

const InfoCardDrink = ({close}) => {

  const {drink} = useContext(InfoDrinkContext)
  const { addDrinkParty, partyCard}= useContext(PartyCartContext)

  const {addDrinkGraduation}  = useContext(GraduationCartContext)

  const {addDrinkWedding} = useContext(WeddingCartContext)



  const handleWedding = () => {
    addDrinkWedding(drink)
  }

  const handleParty = () => {
    addDrinkParty(drink)
    
  }

  const handleGraduation = ()=> {
    addDrinkGraduation(drink)
  }

  return(
    <>
<InfoDrinkContainer>
  <button className='close' onClick={()=> close()}>X</button>
 <div>
   <img src={drink.image_url} alt="" />
 </div>
 <InfoDrink>
   <aside>
     <h1>{drink.name}</h1>
     <span>{drink.tagline}</span>
     <h3></h3>
     <p>{drink.description}</p>
     <div className="button-container">
       <h3>Add to cart</h3>
       <div>
     <Button text="Graduation" handleClick={handleGraduation}/>
     <Button text="Party" handleClick={handleParty}/>
     <Button text="Wedding" handleClick={handleWedding}/>
     </div>
     </div>
   </aside>
   
 </InfoDrink>

</InfoDrinkContainer>
    </>
  )
}

export default InfoCardDrink