"use client";

import React from "react";
import styles from "../../components/VocalRemover.module.css";

const Pitch = () => {
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
        <h1 className={styles.pitchheading}>Audio Speed and Pitch Changer</h1>
        <p className={styles.description}>
          Changes pitch and tempo of the song by adjusting musical key and bpm
          sliders
        </p>
        <br />
        <button className={styles.browseButton}>Browse my files</button>
      </div>
      <hr className={styles.hrtag} />
      <div id="howItWorksSection" className={styles.container2}>
        <h2>Free Online Pitch Shifter</h2>
        <div>
          <p>
            This app changes the song pitch and/or playback speed using one of
            the best pitch shifting algorithms. The musical key, scale, and bpm
            will be automatically detected.
          </p>
          <br />
          <p>
            You can easily transpose music to a different key and change the
            tempo by adjusting the pitch shifter key and bpm sliders.
          </p>
        </div>
        <br />
        <h2>Features</h2>
        <div>
          <ul>
            <li>Analyzes music and finds musical key, scale and bpm</li>
            <li>Changes audio pitch</li>
            <li>Speed up or slow down music playback speed</li>
          </ul>
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

export default Pitch;
