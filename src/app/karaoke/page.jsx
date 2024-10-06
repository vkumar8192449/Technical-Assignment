"use client";

import React from "react";
import styles from "../../components/VocalRemover.module.css";

const Karaoke = () => {
  return (
    <div className={`${styles.homemaincontainer}`}>
      <div className={styles.container}>
        <br />
        <h1 className={styles.pitchheading}>Recording Voice Over a Song</h1>
        <p className={styles.description}>
          Sing & record, tune voice and save complete song. Choose karaoke track
          you want to sing with
        </p>
        <br />
        <button className={styles.browseButton}>Browse my files</button>
      </div>
    </div>
  );
};

export default Karaoke;
