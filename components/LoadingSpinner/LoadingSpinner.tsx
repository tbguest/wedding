import classes from "./LoadingSpinner.module.css";

import React from "react";
import { PulseLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className={classes.spinnerContainer}>
      <PulseLoader
        color="#ffffff"
        size={8}
        className={classes.loadingSpinner}
      />
    </div>
  );
}
