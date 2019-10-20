import React from "react";

const Section = ({ title, children }) => {
  return (
    <section>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
