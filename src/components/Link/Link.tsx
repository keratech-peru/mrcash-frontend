import React from "react";

import "./Link.css";

interface LinkProps {
  text: string;
};

const Link = ({ text }: LinkProps) => {
  return (
    <a className="link">{text}</a>
  )
};

export default Link;
