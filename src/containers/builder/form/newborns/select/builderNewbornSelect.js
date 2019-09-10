import React, { useState, useEffect } from "react";
import { NativeSelect } from "@material-ui/core";
import PropTypes from "prop-types";
import { Wrapper } from "./style/builderNewbornSelect.style";
import { Button } from "../../../../../components/molecules/buttons";

export default function BuilderNewbornSelect({ newborns, add, loading }) {
  const [selectedNewborn, setSelectedNewborn] = useState(newborns[0].name);

  useEffect(() => {
    const filteredNewborns = newborns.filter(
      newborn => !newborns.includes(newborn.name)
    );
    if (filteredNewborns.length > 0) {
      setSelectedNewborn(filteredNewborns[0].name);
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
      if (!newborns.includes(id)) {
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
      <NativeSelect
        data-testid="builder_newborn_select"
        style={{ width: "100%" }}
        onChange={handleChange}
      >
        {returnNewbornOption()}
      </NativeSelect>
      <Button
        data-testid="builder_newborn_select_button"
        color="primary"
        onClick={handleAddSelectedNewborn}
      >
        {loading ? "loading" : "add"}
      </Button>
    </Wrapper>
  );
}

BuilderNewbornSelect.defaultProps = {
  newborns: []
};

BuilderNewbornSelect.propTypes = {
  loading: PropTypes.bool.isRequired,
  newborns: PropTypes.array,
  add: PropTypes.func.isRequired
};
