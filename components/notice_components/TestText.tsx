import React from "react";

export default function App() {
  const [text, setText] = React.useState("");
  const [boldFont, setBoldFont] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(14);
  const [showTools, setShowTools] = React.useState(true);
  return (
    <div className="App">
      <div
        style={{
          fontWeight: boldFont ? "bold" : "normal",
          fontSize: `${fontSize}px`
        }}
      >
        <span onClick={() => setShowTools(!showTools)}>
          {text || "Text Example"}
        </span>
      </div>
      {showTools && (
        <div>
          <button onClick={() => setBoldFont(!boldFont)}>Bold</button> |
          <button onClick={() => setFontSize(fontSize + 1)}>A+</button>
          <button onClick={() => setFontSize(fontSize - 1)}>a-</button>
          <input
            type="text"
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}