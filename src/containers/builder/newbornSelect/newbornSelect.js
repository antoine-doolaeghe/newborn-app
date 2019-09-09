import React, { Fragment, useState, useEffect } from "react";
import { NativeSelect } from "@material-ui/core";
import PropTypes from "prop-types";
import DefaultChip from "../../../components/atoms/chips/chip";
// import { Text } from "../../../components/atoms/text";
import { NewbornListWrapper, Wrapper } from "./style/newbornSelect.style";
import { Button } from "../../../components/molecules/buttons";

export default function NewbornSelect({ newborns, userNewborns, setNewborns }) {
  const [selectedNewborn, setSelectedNewborn] = useState(
    userNewborns.filter(newborn => !newborns.includes(newborn))[0].name
  );

  useEffect(() => {
    const filteredNewborns = userNewborns.filter(
      newborn => !newborns.includes(newborn.name)
    );
    if (filteredNewborns.length > 0) {
      setSelectedNewborn(filteredNewborns[0].name);
    }
  }, [newborns, userNewborns]);

  const handleDelete = chip => () => {
    setNewborns(newborns.filter(newborn => chip !== newborn));
  };

  const handleChange = event => {
    setSelectedNewborn(event.target.value);
  };

  const handleAddSelectedNewborn = () => {
    setNewborns([...newborns, selectedNewborn]);
  };

  const returnNewbornChips = () =>
    newborns.map((data, index) => {
      let icon;
      return (
        <Fragment>
          <DefaultChip
            key={index}
            icon={icon}
            label={data}
            onDelete={handleDelete(data)}
          />
        </Fragment>
      );
    });

  const returnNewbornOption = () =>
    userNewborns.map(option => {
      if (!newborns.includes(option.name)) {
        return <option>{option.name}</option>;
      }
      return null;
    });

  return (
    <Wrapper>
      <NativeSelect
        style={{ width: "100%" }}
        // value="HELLOO"
        onChange={handleChange}
      >
        {returnNewbornOption()}
      </NativeSelect>
      <Button color="primary" onClick={handleAddSelectedNewborn}>
        add
      </Button>
      <NewbornListWrapper>{returnNewbornChips()}</NewbornListWrapper>
    </Wrapper>
  );
}

NewbornSelect.defaultProps = {
  newborns: [],
  userNewborns: []
};

NewbornSelect.propTypes = {
  newborns: PropTypes.array,
  setNewborns: PropTypes.func.isRequired,
  userNewborns: PropTypes.array
};
