import "./App.css";
import PdfViewer from "./components/pdf-viewer";
import RNPdf from "./assets/RN.pdf";

function App() {
  return (
    <div className="App">
      <PdfViewer pdf={RNPdf} />
    </div>
  );
}

export default App;
