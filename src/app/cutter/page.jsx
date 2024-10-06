"use client";

import React, { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import styles from "../../components/VocalRemover.module.css";

const Cutter = () => {
  const [audioFile, setAudioFile] = useState(null);
  const waveformRef = useRef(null);
  const [waveform, setWaveform] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState({
    start: "00:00",
    end: "00:00",
  });
  const [format, setFormat] = useState("mp3");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat);
    setShowDropdown(false);
  };

  // To handle audio file selection
  const handleFileUpload = (e) => {
    setAudioFile(e.target.files[0]);
  };

  // To clear the selected audio file and return to the initial state
  const handleClearFile = () => {
    setAudioFile(null);
    if (waveform) waveform.destroy();
    setWaveform(null);
  };

  // Initialize WaveSurfer once the audio file is selected
  useEffect(() => {
    if (audioFile && !waveform) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#00FF99",
        progressColor: "#00FF66",
        cursorColor: "#FFFFFF",
        barWidth: 2,
        height: 120,
        responsive: true,
      });

      const reader = new FileReader();
      reader.onload = (e) => {
        wavesurfer.load(e.target.result);
        wavesurfer.on("ready", () => {
          const duration = formatTime(wavesurfer.getDuration());
          setAudioDuration({ start: "00:00", end: duration });
        });
      };
      reader.readAsDataURL(audioFile);
      setWaveform(wavesurfer);
    }
  }, [audioFile, waveform]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handlePlayPause = () => {
    if (waveform) {
      waveform.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  // Conditionally render the UI based on whether a file is uploaded or not
  return (
    <div className={styles.homemaincontainer}>
      {!audioFile ? (
        <div className={styles.container}>
          <h4 className={styles.subheading}>HOW IT WORKS</h4>
          <br />
          <h1 className={styles.pitchheading}>Audio Cutter</h1>
          <p className={styles.description}>
            Free editor to trim and cut any audio file online
          </p>
          <br />
          {/* Browse Button */}
          <button
            className={styles.browseButton}
            onClick={() => document.getElementById("fileInput").click()}
          >
            Browse my files
          </button>
          <input
            type="file"
            id="fileInput"
            accept="audio/*"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>
      ) : (
        <div className={styles.audioEditor}>
          {/* Cross button to clear the audio, positioned at the top-right */}
          <button className={styles.clearButton} onClick={handleClearFile}>
            &#10005; {/* X button */}
          </button>

          {/* Waveform display */}
          <div ref={waveformRef} className={styles.waveform}></div>

          {/* Start and end time */}
          <div className={styles.timeDisplay}>
            <span>{audioDuration.start}</span>
            <span>{audioDuration.end}</span>
          </div>

          {/* Controls */}
          <div className={styles.controlBar}>
            <button className={styles.cutButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cut"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M9.15 14.85l8.85 -10.85" />
                <path d="M6 4l8.85 10.85" />
              </svg>{" "}
              &nbsp;cut
            </button>
            <button className={styles.removeButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>{" "}
              &nbsp;remove
            </button>
            <button className={styles.undoButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 14l-4 -4l4 -4" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
              </svg>
            </button>
            <button className={styles.redoButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 14l4 -4l-4 -4" />
                <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
              </svg>
            </button>
          </div>

          {/* Save and format */}
          <div className={styles.saveSection}>
            <button
              className={styles.playPauseButton}
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
                    <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
                  </svg>
                </>
              )}
            </button>
            <div>
              <div className={styles.formatContainer}>
                <div
                  className={styles.formatButton}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  format:{" "}
                  <span className={styles.selectedFormat}>{format}</span>
                </div>
                {showDropdown && (
                  <div className={styles.dropdownMenu}>
                    <div
                      className={styles.dropdownItem}
                      onClick={() => handleFormatChange("wav")}
                    >
                      wav
                    </div>
                    <div
                      className={styles.dropdownItem}
                      onClick={() => handleFormatChange("mp3")}
                    >
                      mp3
                    </div>
                  </div>
                )}
              </div>
              <button className={styles.saveButton}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cutter;
