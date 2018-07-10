import React from "react";

const Title = props => {
  return (
    <section>
      <h2>{props.title}</h2>
      <h3>You have {props.thinghsNumber} things to acomplish.</h3>
    </section>
  );
};

export default Title;
