import { NavbarMinimal } from "@/components/NavbarMinimal";
import React from "react";
import styles from "../page.module.css";

const KeyBPM = () => {
  return (
    <>
      <div className={styles["main-box"]}>
        <NavbarMinimal />
        <div>KeyBPM</div>
      </div>
    </>
  );
};

export default KeyBPM;
