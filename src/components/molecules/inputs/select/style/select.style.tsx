import React from "react";
import styled from "styled-components";
import { NativeSelect, FormHelperText } from "@material-ui/core";

interface IStyledSelectProps {
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: (JSX.Element | null)[];
  disabledLabel?: string;
  error: boolean;
}

interface IStyledFormHelperTextProps {
  children: string;
}

export const StyledSelect = styled(
  (props: IStyledSelectProps): React.ReactElement => <NativeSelect {...props} />
)((): string => {
  return `
      width: 100%;
    `;
});

export const StyledFormHelperText = styled(
  (props: IStyledFormHelperTextProps): React.ReactElement => (
    <FormHelperText {...props} />
  )
)((): string => {
  return `
    `;
});
