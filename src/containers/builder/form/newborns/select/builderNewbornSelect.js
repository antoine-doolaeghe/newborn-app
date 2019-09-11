import FormControl from "@material-ui/core/FormControl";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import { Wrapper } from "./style/builderNewbornSelect.style";
import { IconButton } from "../../../../../components/molecules/buttons";
import { Select } from "../../../../../components/molecules/inputs/select";

export default function BuilderNewbornSelect({ newborns, add }) {
  const [selectedNewborn, setSelectedNewborn] = useState(null);

  useEffect(() => {
    const filteredNewborns = newborns.filter(newborn => !newborn.trainer);
    if (filteredNewborns.length > 0) {
      setSelectedNewborn(filteredNewborns[0]);
    } else {
      setSelectedNewborn(null);
    }
  }, [newborns]);

  const handleChange = event => {
    setSelectedNewborn(newborns[event.target.value]);
  };

  const handleAddSelectedNewborn = () => {
    add(selectedNewborn);
  };

  const returnNewbornOption = () =>
    newborns.map((option, index) => {
      const { id, name } = option;
      if (!option.trainer) {
        return (
          <option
            key={`newborn_select_${id}_key`}
            data-testid={`newborn_select_${id}_id`}
            value={index}
          >
            {name}
          </option>
        );
      }
      return null;
    });

  return (
    <Wrapper>
      <FormControl style={{ width: "100%" }}>
        <Select
          options={returnNewbornOption()}
          disabled={!selectedNewborn}
          disabledLabel="There are no newborns to train"
          onChange={handleChange}
        />
      </FormControl>
      <IconButton
        width="30px"
        height="30px"
        disabled={!selectedNewborn}
        id="builder_newborn_select_button"
        color="primary"
        onClick={handleAddSelectedNewborn}
      >
        <AddIcon />
      </IconButton>
    </Wrapper>
  );
}

BuilderNewbornSelect.defaultProps = {
  newborns: []
};

BuilderNewbornSelect.propTypes = {
  newborns: PropTypes.array,
  add: PropTypes.func.isRequired
};
