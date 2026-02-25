import styled from "styled-components";

const StyledDisplay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  padding: 5px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 22px;
`;

export function Display({ input }) {
  return <StyledDisplay>{input}</StyledDisplay>;
}
