import React from "react";

const ChildContainer = (props) => {
  const {
    number,
    name,
    data: { title, description },
  } = props;
  
  return (
    <div className={`child ${name}`}>
      <h1>Window {number}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ChildContainer;
