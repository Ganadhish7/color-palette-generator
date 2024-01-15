import { useState } from "react";
import ColorPalette from "./ColorPalette";
import tinycolor from "tinycolor2";
import styles from "./App.module.css";

function App(): JSX.Element {
  const [colors, setColors] = useState<string[]>([]);

  const generateRandomPalette = () => {
    const newColors = Array.from({ length: 5 }, () =>
      tinycolor.random().toHexString()
    );
    setColors(newColors);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <h1 className={styles.h1}>Color Palette Generator</h1>
      <button className={styles.button} onClick={generateRandomPalette}>
        Generate Random Palette
      </button>
      <ColorPalette colors={colors} />
    </div>
  );
}

export default App;
