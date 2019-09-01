import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchInput from "../../../../components/molecules/inputs/iconButtonInput/iconButtonInput";

function GenerationSearch() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        style={{
          width: "70%",
          margin: 30,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <SearchInput />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <p>1000+ newborns</p>
            <FormControlLabel
              control={<Checkbox checked value="gilad" />}
              label="buy"
            />
            <FormControlLabel
              control={<Checkbox checked value="jason" />}
              label="training"
            />
            <FormControlLabel
              control={<Checkbox checked value="antoine" />}
              label="other"
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
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
