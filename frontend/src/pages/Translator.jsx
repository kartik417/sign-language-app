import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Translator() {
  const webcamRef = useRef(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const navigate = useNavigate();

  // 🔥 Capture function (optimized)
  const capture = async () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/translate", {
        image: imageSrc,
      });

      if (res.data?.text) {
        setText(res.data.text);
      }
    } catch (err) {
      console.log("Frontend Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Auto detection (no overlap)
useEffect(() => {
  if (!isRunning) return;

  let isProcessing = false;

  const interval = setInterval(async () => {
    if (isProcessing) return;

    isProcessing = true;
    await capture();
    isProcessing = false;
  }, 2000);

  return () => clearInterval(interval);
}, [isRunning]);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      {/* 🔙 Back */}
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h2>Live Sign Detection</h2>

      {/* 🎥 Webcam */}
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={{
          facingMode: "user",
          width: 300,
          height: 300,
        }}
      />

      {/* 🔥 Controls */}
      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)} style={{ marginLeft: "10px" }}>
          Stop
        </button>
      </div>

      {/* 📊 Output */}
      <h3 style={{ marginTop: "20px" }}>
       {text ? text : (loading ? "Detecting..." : "Show a hand sign")}
      </h3>

    </div>
  );
}

export default Translator;