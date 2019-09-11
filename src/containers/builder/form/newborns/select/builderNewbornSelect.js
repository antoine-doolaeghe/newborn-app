import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import React, { useState, useEffect } from "react";
import { NativeSelect } from "@material-ui/core";
import PropTypes from "prop-types";
import { Wrapper } from "./style/builderNewbornSelect.style";
import { Button } from "../../../../../components/molecules/buttons";

export default function BuilderNewbornSelect({ newborns, add, loading }) {
  const [selectedNewborn, setSelectedNewborn] = useState(null);

  useEffect(() => {
    const filteredNewborns = newborns.filter(newborn => !newborn.trainer);
    if (filteredNewborns.length > 0) {
      setSelectedNewborn(filteredNewborns[0]);
    } else {
      setSelectedNewborn(null);
    }
    // TODO SHOULD DISPLAY A PLACEHOLDER FOR NO NEWBORN AVAILABLE
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
  // TODO Add the FORM HELPER TEXT AS PART OF THE INPUT
  return (
    <Wrapper>
      <FormControl style={{ width: "100%" }}>
        <NativeSelect
          data-testid="builder_newborn_select"
          style={{ width: "100%" }}
          disabled={!selectedNewborn}
          onChange={handleChange}
        >
          {returnNewbornOption()}
        </NativeSelect>
        {!selectedNewborn && (
          <FormHelperText style={{ position: "absolute" }}>
            There are no newborns to add
          </FormHelperText>
        )}
      </FormControl>
      <Button
        disabled={!selectedNewborn}
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
