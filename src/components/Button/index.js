import { ButtonConteiner } from "./styles";

const Button = ({valor, event}) => {
    return (
      <ButtonConteiner onClick={event}>
        { valor }
      </ButtonConteiner>
    );
  }
  
  export default Button;