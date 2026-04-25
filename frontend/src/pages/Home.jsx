import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* 🔹 Navbar */}
      <div className="nav">
        <h2 className="logo">SignAI</h2>
        <button className="btn-nav" onClick={() => navigate("/translator")}>
          Try Now
        </button>
      </div>

      {/* 🔹 Hero */}
      <div className="hero">
        <h1>Break Communication Barriers with AI</h1>
        <p>Real-time sign language translation using webcam & AI</p>

        <button
          className="btn-primary"
          onClick={() => navigate("/translator")}
        >
          Start Translating
        </button>
      </div>

      {/* 🔹 How it Works */}
      <div className="section">
        <h2>How it Works</h2>

        <div className="flex">
          <div className="card">
            <h3>1. Open Camera</h3>
            <p>Allow camera access to capture hand gestures</p>
          </div>

          <div className="card">
            <h3>2. Show Gesture</h3>
            <p>Perform sign language in front of camera</p>
          </div>

          <div className="card">
            <h3>3. Get Text</h3>
            <p>AI converts gesture into readable text</p>
          </div>
        </div>
      </div>

      {/* 🔹 Features */}
      <div className="section">
        <h2>Features</h2>

        <div className="flex">
          <div className="card">
            <h3>Real-Time Detection</h3>
            <p>Instant gesture recognition using AI</p>
          </div>

          <div className="card">
            <h3>Sentence Builder</h3>
            <p>Combine gestures into full sentences</p>
          </div>

          <div className="card">
            <h3>Fast API</h3>
            <p>Optimized backend with real-time response</p>
          </div>

          <div className="card">
            <h3>Web Based</h3>
            <p>No installation required, works in browser</p>
          </div>
        </div>
      </div>

      {/* 🔹 Tech Stack */}
      <div className="section">
        <h2>Tech Stack</h2>

        <div className="flex">
          <div className="card">React</div>
          <div className="card">Node.js</div>
          <div className="card">MongoDB</div>
          <div className="card">Python</div>
          <div className="card">TensorFlow</div>
        </div>
      </div>

      {/* 🔹 CTA */}
      <div className="cta">
        <h2>Start Translating Now</h2>
        <button
          className="btn-primary"
          onClick={() => navigate("/translator")}
        >
          Try Now
        </button>
      </div>

      {/* 🔹 Footer */}
      <div className="footer">
        <p>Built with MERN + AI</p>
        <p>© 2026 Kartik</p>
      </div>

    </div>
  );
}

export default Home;