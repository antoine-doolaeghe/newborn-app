import React, { useState, useEffect, Fragment } from "react";
import { NativeSelect } from "@material-ui/core";
import PropTypes from "prop-types";
import { Button } from "../../../../../components/molecules/buttons";

export default function BuilderNewbornSelect({ newborns, add }) {
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
      if (!newborns.includes(option.id)) {
        return (
          <option key={`newborn_select_${option.id}`} value={index}>
            {option.name}
          </option>
        );
      }
      return null;
    });

  return (
    <Fragment>
      <NativeSelect style={{ width: "100%" }} onChange={handleChange}>
        {returnNewbornOption()}
      </NativeSelect>
      <Button
        data-testid="builder_newborn_select_button"
        color="primary"
        onClick={handleAddSelectedNewborn}
      >
        add
      </Button>
    </Fragment>
  );
}

BuilderNewbornSelect.defaultProps = {
  newborns: []
};

BuilderNewbornSelect.propTypes = {
  newborns: PropTypes.array,
  add: PropTypes.func.isRequired
};
