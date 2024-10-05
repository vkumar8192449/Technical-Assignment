import { NavbarMinimal } from "@/components/NavbarMinimal";
import React from "react";
import styles from "../page.module.css";

const Cutter = () => {
  return (
    <>
      <div className={styles["main-box"]}>
        <NavbarMinimal />
        <div>Cutter</div>
      </div>
    </>
  );
};

export default Cutter;
