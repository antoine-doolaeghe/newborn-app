import React, { useState, Fragment } from "react";
import NewbornRecord from "../record/newbornRecord";

export default function withRecord(WrapperHeaderComp) {
  const RecordHoc = props => {
    const [isRecordOpen, setIsRecordOpen] = useState(false);
    const [id, setId] = useState("");
    const onRecordClose = () => setIsRecordOpen(false);
    const onRecordOpen = event => {
      setId(event.target.closest("section").dataset.newbornid);
      setIsRecordOpen(true);
    };
    return (
      <Fragment>
        <NewbornRecord
          setId={setId}
          id={id}
          open={isRecordOpen}
          onClose={onRecordClose}
        />
        <WrapperHeaderComp onRecordOpen={onRecordOpen} {...props} />
      </Fragment>
    );
  };

  return RecordHoc;
}
