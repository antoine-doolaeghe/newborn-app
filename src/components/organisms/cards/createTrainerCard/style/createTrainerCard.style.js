import styled from "styled-components";
import TextInput from "../../../../molecules/inputs/textInput/textInput";
import { Button } from "../../../../molecules/buttons/button.style";

// should be an atom
export const CardWrapper = styled.section`
  border: ${props => (props.color ? `2px solid ${props.color.main}` : null)};
  background: ${props => (props.color ? props.color.light : null)};
  border-radius: 5px;
  height: 220px;
  margin-left: 30px;
  position: relative;
  width: 220px;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    border: ${props => (props.color ? `2px solid ${props.color.dark}` : null)};
    cursor: pointer;
  }
`;

export const CreateTrainerTitle = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TrainerTitleInput = styled(TextInput)`
  margin: 8px !important;
`;

export const TrainerActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CreateTrainerButton = styled(Button)`
  flex: "auto";
  margin-left: 0;
  width: 100%;
`;
