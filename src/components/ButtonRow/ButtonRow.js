import React from "react";

import styles from "./ButtonRow.module.css";

const ButtonRow = ({ children }) => {
  return <div className={`${styles.buttonRow} styled-scroll`}>{children}</div>;
};

export default ButtonRow;
