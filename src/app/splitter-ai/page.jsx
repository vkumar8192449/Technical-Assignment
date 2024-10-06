"use client";

import React from "react";
import Image from "next/image";
import styles from "../../components/VocalRemover.module.css";

const Splitter = () => {
  const scrollToSection = () => {
    const section = document.getElementById("howItWorksSection");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.homemaincontainer} ${styles.splitter}`}>
      <div className={styles.container}>
        <h4 className={styles.subheading} onClick={scrollToSection}>
          HOW IT WORKS
        </h4>
        <h1 className={styles.heading}>Splitter AI</h1>
        <p className={styles.description}>
          Split music into separated parts with AI-Powered algorithms
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/image2.png"
            alt="Music and Vocal Tracks"
            width={600}
            height={200}
            layout="intrinsic"
          />
        </div>
        <button className={styles.browseButton}>Browse my files</button>
      </div>
      <hr className={styles.hrtag} />
      <div id="howItWorksSection" className={styles.container2}>
        <h2>AI-Powered Music Separator</h2>
        <div>
          <p>
            This app allows to separate music into an individual streams such as
            vocal, bass, percussion, and lets you rebalance their individual
            volumes. This is the simplest way to get multitracks from any song.
          </p>
          <br />
          <p>
            Once you choose a song, artificial intelligence will separate music
            into stems: vocals, bass, drums, others. Processing usually takes
            about 1 minute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splitter;
