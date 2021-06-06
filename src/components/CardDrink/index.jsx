import { DrinkContainer } from "./styles"
import {useContext } from "react"
import { InfoDrinkContext } from "../../Providers/infoDrink"



const CardDrink = ({image, name, fabrication, description, qtdLitres, setShowInfo ,currentDrink}) => {
  

const { addDrink } = useContext(InfoDrinkContext)





const handleInfo =()=>{
  setShowInfo(true)
  addDrink(currentDrink)
}

  return(
   <>
   <DrinkContainer>
     <div>
     <figure>
     <img src={image} alt="" />
     </figure>
     </div>
   
   <h3>
     {name}
   </h3>
   <p>{fabrication}</p>
   <p>{description.length > 70 ? `${description.substring(0, 70)}...` : description}</p>
   <p>{qtdLitres.value} {qtdLitres.unit}</p>
   <button onClick={() => handleInfo()}>More info...</button>
   </DrinkContainer>
   </>
  )
}
export default CardDrink