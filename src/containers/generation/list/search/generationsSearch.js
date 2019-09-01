import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchInput from "../../../../components/molecules/inputs/iconButtonInput/iconButtonInput";

function GenerationSearch({ newbornCount, disabled }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        style={{
          width: "70%",
          margin: 30,
          marginTop: 60,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <SearchInput disabled={disabled} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ marginRight: 15 }}>
              <b>{newbornCount}</b> newborns
            </p>
            <FormControlLabel
              control={<Checkbox checked value="gilad" />}
              label="To Buy"
            />
            <FormControlLabel
              control={<Checkbox checked value="jason" />}
              label="Training"
            />
            <FormControlLabel
              control={<Checkbox checked value="antoine" />}
              label="Other"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Select displayEmpty name="age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              }
              label="training"
            />
            <FormControlLabel
              control={
                <Select displayEmpty name="age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Low to high</MenuItem>
                </Select>
              }
              label="other"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerationSearch;
