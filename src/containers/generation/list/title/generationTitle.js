import React from "react";

function GenerationTitle({ title }) {
  return (
    <div>
      <p>
        Generation index: <span>{title}</span>
      </p>
    </div>
  );
}

export default GenerationTitle;
