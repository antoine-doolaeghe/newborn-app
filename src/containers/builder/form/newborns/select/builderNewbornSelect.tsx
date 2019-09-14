import FormControl from "@material-ui/core/FormControl";
import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Wrapper } from "./style/builderNewbornSelect.style";
import { IconButton } from "../../../../../components/molecules/buttons";
import { Select } from "../../../../../components/molecules/inputs/select";

interface INewbornProps {
  trainer: string;
  id: string;
  name: string;
}

interface IBuilderNewbornSelectProps {
  newborns: Array<INewbornProps>;
  add: Function;
  loading: Boolean;
}

export default function BuilderNewbornSelect({
  newborns,
  add,
  loading
}: IBuilderNewbornSelectProps) {
  const [selectedNewborn, setSelectedNewborn] = useState<INewbornProps | null>(
    null
  );

  useEffect(() => {
    const filteredNewborns = newborns.filter(newborn => !newborn.trainer);
    if (filteredNewborns.length > 0) {
      setSelectedNewborn(filteredNewborns[0]);
    } else {
      setSelectedNewborn(null);
    }
  }, [newborns]);

  const handleChange = event => {
    const { value } = event.target;
    setSelectedNewborn(newborns[value]);
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
          disabled={!selectedNewborn}
          disabledLabel="There are no newborns to train"
          id="builder_newborn_select"
          label="Add a newborn to train"
          onChange={handleChange}
          options={returnNewbornOption()}
        />
      </FormControl>
      <IconButton
        color="primary"
        disabled={!selectedNewborn}
        height="40px"
        id="builder_newborn_select_button"
        loading={loading}
        onClick={handleAddSelectedNewborn}
        width="40px"
      >
        <AddIcon />
      </IconButton>
    </Wrapper>
  );
}
