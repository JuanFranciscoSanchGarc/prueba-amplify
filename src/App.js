import "./App.css";
import "./components/ButtonLambda";
import "./components/WebCamCampture";

import ButtonLambda from "./components/ButtonLambda";
import WebcamCapture from "./components/WebCamCampture";

const App = () => {
  return (
    <div>
      <h1>Bienvenido a la revision de tus riesgo</h1>
      <WebcamCapture></WebcamCapture>
      <ButtonLambda></ButtonLambda>
    </div>
  );
};

export default App;
