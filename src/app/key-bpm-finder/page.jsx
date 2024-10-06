"use client";

import React from "react";
import styles from "../../components/VocalRemover.module.css";

const KeyBPM = () => {
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
        <h1 className={styles.pitchheading}>Song Key and BPM Finder</h1>
        <p className={styles.description}>
          Analyzes music and finds Key, Scale and BPM for any song
        </p>
        <br />
        <button className={styles.browseButton}>Browse my files</button>
      </div>
      <hr className={styles.hrtag} />
      <div id="howItWorksSection" className={styles.container2}>
        <h2>How to find Key & BPM</h2>
        <div>
          <p>
            This app analyzes music and estimates pitch and tempo [e.g. A♭
            major, 120 bpm]. You can upload multiple files at once. Processing
            time takes a few seconds.
          </p>
        </div>
        <br />
        <h2>Change Key & BPM</h2>
        <div>
          <p>
            Using Pitch Shifter tool you can transpose song to a different key
            and tempo.
          </p>
        </div>
        <br />
        <h2>Tap tempo</h2>
        <div>
          <p>
            Tap tempo tool allows you to calculate tempo beats per minute by
            tapping space key to the rhythm or beat.
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

export default KeyBPM;
