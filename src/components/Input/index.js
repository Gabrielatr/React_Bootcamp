
import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <p>Digital Calculator</p>
        <input readOnly value={value} />
      </InputContainer>
    );
  }
  
  export default Input;