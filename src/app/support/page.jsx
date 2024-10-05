import { NavbarMinimal } from "@/components/NavbarMinimal";
import React from "react";
import styles from "../page.module.css";

const Support = () => {
  return (
    <>
      <div className={styles["main-box"]}>
        <NavbarMinimal />
        <div>Support</div>
      </div>
    </>
  );
};

export default Support;
