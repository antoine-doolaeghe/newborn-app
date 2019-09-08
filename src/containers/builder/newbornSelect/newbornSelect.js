import React, { Fragment } from "react";
import { NativeSelect } from "@material-ui/core";
import PropTypes from "prop-types";
import DefaultChip from "../../../components/atoms/chips/chip";
import { Text } from "../../../components/atoms/text";
import { NewbornListWrapper, Wrapper } from "./style/newbornSelect.style";

export default function NewbornSelect({ newborns, userNewborn, setNewborns }) {
  const handleDelete = chipToDelete => () => {
    setNewborns(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const returnNewbornChips = () =>
    newborns.map(data => {
      let icon;
      return (
        <Fragment>
          <DefaultChip
            key={data.key}
            icon={icon}
            label={data.label}
            onDelete={handleDelete(data)}
          />
        </Fragment>
      );
    });

  const returnNewbornOption = () =>
    userNewborn.map(option => {
      return (
        <option>
          <Text>option</Text>
        </option>
      );
    });

  const handleChange = () => setNewborns([...newborns, event.target]);

  return (
    <Wrapper>
      <NativeSelect
        style={{ width: "100%" }}
        value="HELLOO"
        onChange={handleChange}
      >
        {returnNewbornOption()}
      </NativeSelect>
      <NewbornListWrapper>{returnNewbornChips()}</NewbornListWrapper>
    </Wrapper>
  );
}

NewbornSelect.defaultProps = {
  newborns: [],
  userNewborn: []
};

NewbornSelect.propTypes = {
  newborns: PropTypes.array,
  setNewborns: PropTypes.func.isRequired,
  userNewborn: PropTypes.array
};
