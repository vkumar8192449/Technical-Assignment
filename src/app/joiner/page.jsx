"use client";

import React from "react";
import styles from "../../components/VocalRemover.module.css";

const Joiner = () => {
  return (
    <div className={`${styles.homemaincontainer}`}>
      <div className={styles.container}>
        <br />
        <h1 className={styles.pitchheading}>Audio Joiner</h1>
        <p className={styles.description}>
          Join multiple audio tracks into one. Choose audio files you want to
          merge
        </p>
        <br />
        <button className={styles.browseButton}>Browse my files</button>
      </div>
    </div>
  );
};

export default Joiner;
