import { NavbarMinimal } from "@/components/NavbarMinimal";
import React from "react";
import styles from "../page.module.css";

const Recorder = () => {
  return (
    <>
      <div className={styles["main-box"]}>
        <NavbarMinimal />
        <div>Recorder</div>
      </div>
    </>
  );
};

export default Recorder;
