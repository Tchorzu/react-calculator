import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 15px;
  background-color: ${({ $type }) =>
    $type === "operator"
      ? "#9d9d9d"
      : $type === "clear"
        ? "#ff0000"
        : $type === "equal"
          ? "#ffb300"
          : "#edebeb"};
  color: ${({ $type }) => ($type ? "#fff" : "#000")};
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  ${({ $type }) => ($type === "equal" ? "grid-column:4" : "")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $type }) =>
      $type === "operator"
        ? "#959595"
        : $type === "clear"
          ? "#f20000"
          : $type === "equal"
            ? "#f2aa00"
            : "#e1dede"};
  }
`;
