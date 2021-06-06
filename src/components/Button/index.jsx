import { DivButton } from "./styles"

const Button = ({text, handleClick}) => {
return(
  <DivButton onClick={()=>handleClick()}>{text}</DivButton>
)
}

export default Button