import React from "react";

function About(props) {
  const { image = "https://via.placeholder.com/215", about } = props;
  return (
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  );
}

export default About;
