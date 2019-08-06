import React from "react";
import PropTypes from "prop-types";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "../../../molecules/buttons";
import { RecordHeaderWrapper } from "./style/recordHeader.style";
import RecordHeaderLoader from "./loader/recordHeaderLoader";

function RecordHeader({ loading, onClose, title }) {
  return (
    <RecordHeaderWrapper>
      {loading ? <RecordHeaderLoader /> : <p>{title}</p>}
      <IconButton width="30px" height="30px" color="light" onClick={onClose}>
        <ClearIcon />
      </IconButton>
    </RecordHeaderWrapper>
  );
}

RecordHeader.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default RecordHeader;
