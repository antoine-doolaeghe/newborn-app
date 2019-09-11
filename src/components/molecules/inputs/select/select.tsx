import React, { Fragment } from "react";
import { StyledSelect, StyledFormHelperText } from "./style/select.style";

export interface ISelectProps {
  id: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
  disabledLabel: string;
}
const Select = ({
  disabled,
  onChange,
  options,
  disabledLabel,
  id
}: ISelectProps): React.ReactElement => {
  return (
    <Fragment>
      <StyledSelect data-testid={id} disabled={disabled} onChange={onChange}>
        {options}
      </StyledSelect>
      {disabled && <StyledFormHelperText>{disabledLabel}</StyledFormHelperText>}
    </Fragment>
  );
};

export default Select;
