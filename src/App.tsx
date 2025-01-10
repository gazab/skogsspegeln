import skogsspegeln from "/skogsspegeln.webp";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${skogsspegeln})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default App;
