import "@mantine/core/styles.css";
import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import HomePage from "./Components/HomePage";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.js",
//   import.meta.url
// ).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;


// pdfjs.GlobalWorkerOptions.workerSrc=`https://cdn.jsdeliver.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = {
    breakpoints: {
      xs: "320px",
      sm: "476px",
      md: "640px",
      bs: "768px",
      lg: "900px",
      xl: "1024px",
      "2xl": "1280px",
    },
  };

  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
