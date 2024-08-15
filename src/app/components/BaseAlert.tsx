import React from "react";
import styles from "../alert.module.css";
import classNames from "classnames";

type PropTypes = {
  type?: "primary" | "danger" | "warning" | "success";
  children?: React.ReactNode;
};

export default function B9({ type, children }: PropTypes) {
  return (
    <button
      className={classNames(styles.alert, {
        [styles.alert_primary]: type === "primary",
        [styles.alert_danger]: type === "danger",
        [styles.alert_warning]: type === "warning",
        [styles.alert_success]: type === "success",
      })}
    >
      {children}
    </button>
  );
}
