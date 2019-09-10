import React from "react";
import PropTypes from "prop-types";
import { NewbornListWrapper } from "./style/newbornList.style";
import DefaultChip from "../../../../../components/atoms/chips/chip";

export default function BuilderNewbornList({ newborns, remove }) {
  const handleDelete = chip => () => {
    remove(chip);
  };

  const returnNewbornChips = () =>
    newborns.map(data => {
      return (
        <DefaultChip
          key={`builder_newborn_${data.id}_key`}
          data-testid={`builder_newborn_${data.id}_id`}
          label={data.name}
          onDelete={handleDelete(data)}
        />
      );
    });

  return <NewbornListWrapper>{returnNewbornChips()}</NewbornListWrapper>;
}

BuilderNewbornList.propTypes = {
  newborns: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};
