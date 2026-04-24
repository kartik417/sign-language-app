import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Translator() {
  const webcamRef = useRef(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const capture = async () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      setLoading(true);

      const res = await axios.post("https://sign-language-app-xetg.onrender.com/api/translate", {
        image: imageSrc,
      });

      setText(res.data.text);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Auto detection every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h2>Live Sign Detection</h2>

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
      />

      <h3>{loading ? "Detecting..." : text}</h3>
    </div>
  );
}

export default Translator;