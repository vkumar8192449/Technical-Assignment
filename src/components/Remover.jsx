"use client";
import React from "react";
import Image from "next/image";
import styles from "./VocalRemover.module.css";

export const Remover = () => {
  const scrollToSection = () => {
    const section = document.getElementById("howItWorksSection");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.homemaincontainer}>
      <div className={styles.container}>
        <h4 className={styles.subheading} onClick={scrollToSection}>
          HOW IT WORKS
        </h4>
        <h1 className={styles.heading}>Vocal Remover and Isolation</h1>
        <p className={styles.description}>
          Separate voice from music out of a song free with powerful AI
          algorithms
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/image.png"
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
        <h2>Remove Vocals from a Song</h2>
        <div>
          <p>
            This free online application will help remove vocals from a song by
            creating karaoke.
          </p>
          <br />
          <p>
            Once you choose a song, artificial intelligence will separate the
            vocals from the instrumental ones. You will get two tracks - a
            karaoke version of your song (no vocals) and acapella version
            (isolated vocals).
          </p>
          <br />
          <p>
            Despite the complexity and high cost of service, you can use it
            absolutely free. Processing usually takes about 10 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};
