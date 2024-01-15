interface ColorPaletteProps {
  colors: string[];
}

function ColorPalette({ colors }: ColorPaletteProps): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "200px",
            height: "200px",
            margin: "5px",
            borderRadius: "5px",
          }}
        >
          <p>{color}</p>
        </div>
      ))}
    </div>
  );
}

export default ColorPalette;
