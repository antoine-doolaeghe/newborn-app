import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchInput from "../../../../components/molecules/inputs/iconButtonInput/iconButtonInput";
import {
  Wrapper,
  SearchParameters,
  SearchFilters,
  SearchContainer
} from "./generationSearch.style";

function GenerationSearch({ newbornCount, disabled }) {
  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput disabled={disabled} />
        <SearchParameters>
          <SearchFilters>
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
          </SearchFilters>
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
        </SearchParameters>
      </SearchContainer>
    </Wrapper>
  );
}

export default GenerationSearch;
