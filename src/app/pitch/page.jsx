import { NavbarMinimal } from "@/components/NavbarMinimal";
import React from "react";
import styles from "../page.module.css";

const Pitch = () => {
  return (
    <>
      <div className={styles["main-box"]}>
        <NavbarMinimal />
        <div>Pitch</div>
      </div>
    </>
  );
};

export default Pitch;
