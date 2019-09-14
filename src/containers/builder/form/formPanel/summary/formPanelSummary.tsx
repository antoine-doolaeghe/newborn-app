import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Heading,
  StyledExpansionPanelSummary
} from "./style/formPanelSummary.style";
import { Text } from "../../../../../components/atoms/text";
import DeleteLevelButton from "./deleteLevelButton/deleteLevelButton";

interface IFormPanelSummaryProps {
  index: number;
  label: string;
  id: string;
  refetch: Function;
}

export const FormPanelSummary = ({
  index,
  label,
  id,
  refetch
}: IFormPanelSummaryProps) => {
  const hasCancelButton = index !== 0 && index !== 1;
  return (
    <StyledExpansionPanelSummary
      expandIcon={hasCancelButton && <ExpandMoreIcon />}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Heading>
          <Text weight="bold">{label}</Text>
        </Heading>
        {hasCancelButton && <DeleteLevelButton id={id} refetch={refetch} />}
      </div>
    </StyledExpansionPanelSummary>
  );
};

export default FormPanelSummary;
