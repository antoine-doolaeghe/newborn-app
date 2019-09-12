import React from "react";
import PropTypes from "prop-types";
import { NewbornListWrapper } from "./style/newbornList.style";
import DefaultChip from "../../../../../components/atoms/chips/chip";

export default function BuilderNewbornList({ newborns, remove }) {
  const handleDelete = chip => () => {
    remove(chip);
  };
  // TODO empty list placeholder
  const returnListContent = () => {
    const list = newborns.map(data => {
      return (
        <DefaultChip
          key={`builder_newborn_${data.id}_key`}
          data-testid={`builder_newborn_${data.id}_id`}
          label={data.name}
          onDelete={handleDelete(data)}
        />
      );
    });
    return list.length > 0 ? list : "No newborn to train";
  };

  return <NewbornListWrapper>{returnListContent()}</NewbornListWrapper>;
}

BuilderNewbornList.defaultProps = {
  newborns: []
};

BuilderNewbornList.propTypes = {
  newborns: PropTypes.array,
  remove: PropTypes.func.isRequired
};
