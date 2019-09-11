import React, { Fragment } from "react";
import { InputLabel } from "@material-ui/core";
import { StyledSelect, StyledFormHelperText } from "./style/select.style";

export interface ISelectProps {
  id: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
  label: string;
  disabledLabel: string;
}
const Select = ({
  disabled,
  disabledLabel,
  id,
  label,
  onChange,
  options
}: ISelectProps): React.ReactElement => {
  return (
    <Fragment>
      <InputLabel shrink>{label}</InputLabel>
      <StyledSelect data-testid={id} disabled={disabled} onChange={onChange}>
        {options}
      </StyledSelect>
      {disabled && <StyledFormHelperText>{disabledLabel}</StyledFormHelperText>}
    </Fragment>
  );
};

export default Select;
