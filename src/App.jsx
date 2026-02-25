import { useState } from "react";
import { StyledContainer } from "./components/styles/StyledContainer.jsx";
import { Display } from "./components/Display/Display.jsx";
import { Buttons } from "./components/Buttons/Buttons.jsx";

function App() {
  const [input, setInput] = useState("0");

  function signClick(sign) {
    setInput((prevState) => (prevState === "0" ? sign : prevState + sign));
  }

  function clearOperation() {
    setInput("0");
  }

  function equalOperation() {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  }

  return (
    <StyledContainer>
      <Display input={input} />
      <Buttons
        handleButtonClick={signClick}
        handleClearClick={clearOperation}
        handleEqualClick={equalOperation}
      />
    </StyledContainer>
  );
}

export default App;
