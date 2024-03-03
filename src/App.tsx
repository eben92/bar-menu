import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "./App.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdf from "./assets/menu1.pdf?url";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Viewer
        theme={"dark"}
        fileUrl={pdf}
        defaultScale={SpecialZoomLevel.PageFit}
      />
    </div>
  );
}

export default App;
