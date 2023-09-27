import React, { useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const url = `https://8dyid462k8.execute-api.eu-west-1.amazonaws.com/main/revisarRiesgo`;
    const response = await axios.post(url, {
      fileKey: "manolo",
      type: "image/jpeg",
    });
    console.log("Response from Lambda:", response.data);
  }, [webcamRef]);

  return (
    <div className="webcam-container">
      {" "}
      {/* Añadido un contenedor con clase para los estilos */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam" // Añadida clase para aplicar estilos
        videoConstraints={{
          facingMode: "environment", // Especifica usar la cámara trasera
        }}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};

export default WebcamCapture;
