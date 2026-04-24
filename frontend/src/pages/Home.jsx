import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* 🔹 Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#111",
        color: "#fff"
      }}>
        <h3>SignAI</h3>
        <button 
          onClick={() => navigate("/translator")}
          style={{
            padding: "8px 16px",
            background: "#4CAF50",
            border: "none",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Try Now
        </button>
      </div>

      {/* 🔹 Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "#f5f5f5"
      }}>
        <h1 style={{ fontSize: "40px" }}>
          Real-Time Sign Language Translator
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Convert hand gestures into text instantly using AI
        </p>

        <button
          onClick={() => navigate("/translator")}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            fontSize: "16px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Start Translating
        </button>
      </div>

      {/* 🔹 Features Section */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Features</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}>
          
          <div style={cardStyle}>
            <h3>Real-Time Detection</h3>
            <p>Detect hand gestures instantly using webcam</p>
          </div>

          <div style={cardStyle}>
            <h3>Instant Output</h3>
            <p>Get text output immediately from gestures</p>
          </div>

          <div style={cardStyle}>
            <h3>Web Based</h3>
            <p>No app needed, works directly in browser</p>
          </div>

        </div>
      </div>

      {/* 🔹 Footer */}
      <div style={{
        background: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "20px"
      }}>
        <p>Built with MERN Stack</p>
        <p>© 2026 Kartik</p>
      </div>

    </div>
  );
}

const cardStyle = {
  width: "250px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  background: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

export default Home;