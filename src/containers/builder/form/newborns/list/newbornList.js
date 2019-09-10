import React from "react";
import PropTypes from "prop-types";
import { NewbornListWrapper, Wrapper } from "../style/newbornSelect.style";
import DefaultChip from "../../../../../components/atoms/chips/chip";

export default function BuilderNewbornList({ newborns, remove }) {
  const handleDelete = chip => () => {
    remove(chip);
  };

  const returnNewbornChips = () =>
    newborns.map((data, index) => {
      let icon;
      return (
        <DefaultChip
          key={index}
          icon={icon}
          label={data.name}
          onDelete={handleDelete(data)}
        />
      );
    });

  return (
    <Wrapper>
      <NewbornListWrapper>{returnNewbornChips()}</NewbornListWrapper>
    </Wrapper>
  );
}

BuilderNewbornList.defaultProps = {
  newborns: []
};

BuilderNewbornList.propTypes = {
  newborns: PropTypes.array,
  remove: PropTypes.func.isRequired
};
