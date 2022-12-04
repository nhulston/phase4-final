import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  margin: 10px auto;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #0070F3;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #0555b0;
    transition: .5s;
  }
`;