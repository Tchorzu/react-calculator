import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton.jsx";

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export function Buttons({
  handleButtonClick,
  handleClearClick,
  handleEqualClick,
}) {
  return (
    <StyledButtons>
      <StyledButton onClick={() => handleButtonClick("7")}>7</StyledButton>
      <StyledButton onClick={() => handleButtonClick("8")}>8</StyledButton>
      <StyledButton onClick={() => handleButtonClick("9")}>9</StyledButton>
      <StyledButton onClick={() => handleButtonClick("/")} $type="operator">
        /
      </StyledButton>

      <StyledButton onClick={() => handleButtonClick("4")}>4</StyledButton>
      <StyledButton onClick={() => handleButtonClick("5")}>5</StyledButton>
      <StyledButton onClick={() => handleButtonClick("6")}>6</StyledButton>
      <StyledButton onClick={() => handleButtonClick("*")} $type="operator">
        *
      </StyledButton>

      <StyledButton onClick={() => handleButtonClick("1")}>1</StyledButton>
      <StyledButton onClick={() => handleButtonClick("2")}>2</StyledButton>
      <StyledButton onClick={() => handleButtonClick("3")}>3</StyledButton>
      <StyledButton onClick={() => handleButtonClick("-")} $type="operator">
        -
      </StyledButton>

      <StyledButton onClick={() => handleButtonClick("0")}>0</StyledButton>
      <StyledButton onClick={() => handleButtonClick(".")}>.</StyledButton>
      <StyledButton onClick={handleClearClick} $type="clear">
        C
      </StyledButton>
      <StyledButton onClick={() => handleButtonClick("+")} $type="operator">
        +
      </StyledButton>

      <StyledButton onClick={handleEqualClick} $type="equal">
        =
      </StyledButton>
    </StyledButtons>
  );
}
