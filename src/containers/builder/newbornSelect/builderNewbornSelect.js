import React, { Fragment } from "react";
import { NativeSelect } from "@material-ui/core";
import DefaultChip from "../../../components/atoms/chips/chip";

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const returnNewbornChips = () =>
    chipData.map(data => {
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

  return (
    <div style={{ margin: 20 }}>
      <NativeSelect
        style={{ width: "100%" }}
        value="HELLOO"
        // onChange={handleChange}
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "50px",
          border: "1px solid",
          margin: "20px 0px"
        }}
      >
        {returnNewbornChips()}
      </div>
    </div>
  );
}
