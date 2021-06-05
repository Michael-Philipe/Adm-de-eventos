import { DrinkContainer, InfoDrink } from "./styles"
import {useContext, useEffect} from "react"
import { InfoDrinkContext } from "../../Providers/infoDrink"



const CardDrink = ({image, name, fabrication, description, qtdLitres, setShowInfo ,currentDrink}) => {

const { addDrink , drink} = useContext(InfoDrinkContext)




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
   
   <h5>
     <a href="">{name}</a>
   </h5>
   <p>{fabrication}</p>
   <p>{description.length > 70 ? `${description.substring(0, 70)}...` : description}</p>
   <p>{qtdLitres.value} {qtdLitres.unit}</p>
   <button onClick={() => handleInfo()}>Compre já</button>
   </DrinkContainer>
   </>
  )
}
export default CardDrink