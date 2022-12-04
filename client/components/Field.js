import styled from "styled-components";

const Label = styled.label`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  font-size: 16px;
  text-align: center;
`;

function Field(props) {
    return (
        <>
            <Label>{props.label}</Label>
            <Input type={props.date ? 'date' : (props.int ? 'number' : 'text')} value={props.value} onChange={(event => {
                props.onChange(event.target.value);
            })}/>
        </>
    );
}

export default Field;