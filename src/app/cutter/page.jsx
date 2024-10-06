"use client";

import React from "react";
import styles from "../../components/VocalRemover.module.css";

const Cutter = () => {
  const scrollToSection = () => {
    const section = document.getElementById("howItWorksSection");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.homemaincontainer}`}>
      <div className={styles.container}>
        <h4 className={styles.subheading} onClick={scrollToSection}>
          HOW IT WORKS
        </h4>
        <br />
        <h1 className={styles.pitchheading}>Audio Cutter</h1>
        <p className={styles.description}>
          Free editor to trim and cut any audio file online
        </p>
        <br />
        <button className={styles.browseButton}>Browse my files</button>
      </div>
      <hr className={styles.hrtag} />
      <div id="howItWorksSection" className={styles.container2}>
        <h2>How to cut audio</h2>
        <div>
          <p>
            This app can be used to trim and/or cut audio tracks, remove an
            audio fragments. Fade in and fade out your music easily to make the
            audio harmoniously.
          </p>
          <br />
          <p>
            It fast and easy to use. You can save the audio file in any format
            (codec parameters are configured)
          </p>
          <br />
          <p>
            It works directly in the browser, no needs to install any software,
            is available for mobile devices.
          </p>
        </div>
        <br />
        <h2>🔒 Privacy and Security Guaranteed</h2>
        <div>
          <p>This is serverless app. Your files does not leave your device</p>
        </div>
      </div>
    </div>
  );
};

export default Cutter;
