import { DrinkContainer } from "./styles"

const CardDrink = ({image, name, fabrication, description, qtdLitres}) => {

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
   <button>Compre já</button>
   </DrinkContainer>
   </>
  )
}
export default CardDrink