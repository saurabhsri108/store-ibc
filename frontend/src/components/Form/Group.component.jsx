import React from "react";

const Group = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Group;
