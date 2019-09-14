import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Heading,
  StyledExpansionPanelSummary
} from "./style/formPanelSummary.style";
import { Text } from "../../../../../components/atoms/text";
import DeleteLevelButton from "./deleteLevelButton/deleteLevelButton";

export const FormPanelSummary = ({
  index,
  label,
  id,
  refetch,
  activeStep,
  setActiveStep
}) => {
  const handlePanelOnclick = () => {
    if (activeStep === index) {
      setActiveStep(null);
    } else {
      setActiveStep(index);
    }
  };
  const hasCancelButton = index !== 0 && index !== 1;
  return (
    <StyledExpansionPanelSummary
      expandIcon={hasCancelButton && <ExpandMoreIcon />}
      onClick={handlePanelOnclick}
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

FormPanelSummary.defaultProps = {
  setActiveStep: () => {}
};

FormPanelSummary.propTypes = {
  index: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func
};

export default FormPanelSummary;
