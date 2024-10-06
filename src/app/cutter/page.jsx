"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import styles from "../../components/VocalRemover.module.css";

const Cutter = () => {
  const waveformRef = useRef(null);
  const [waveform, setWaveform] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    if (waveformRef.current && !waveform) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#00FFCC", // Similar color to your image
        progressColor: "#00FF99",
        cursorColor: "#FFFFFF",
        barWidth: 2,
        responsive: true,
        height: 100,
      });
      setWaveform(wavesurfer);
    }

    if (audioFile && waveform) {
      const reader = new FileReader();
      reader.onload = (e) => {
        waveform.load(e.target.result);
      };
      reader.readAsDataURL(audioFile);
    }
  }, [audioFile, waveform]);

  const handleFileUpload = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const trimAudio = () => {
    // Implement trimming logic
    const startTime = 0; // Replace with actual trim start
    const endTime = waveform.getDuration(); // Replace with actual trim end
    waveform.trim(startTime, endTime); // Example trimming logic
  };

  const saveAudio = () => {
    // Logic to save the trimmed audio
    alert("Save functionality goes here");
  };

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
        <input
          type="file"
          accept="audio/*"
          id="fileInput"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        <button
          className={styles.browseButton}
          onClick={() => document.getElementById("fileInput").click()}
        >
          Browse my files
        </button>
      </div>
      <hr className={styles.hrtag} />
      <br />
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
