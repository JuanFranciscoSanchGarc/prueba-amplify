import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Storage } from "@aws-amplify/storage";
import config from "../aws-exports";

const WebcamCapture = () => {
  Storage.configure({
    region: config.aws_user_files_s3_bucket_region,
    bucket: config.aws_user_files_s3_bucket,
    identityPoolId: config.aws_cognito_identity_pool_id,
    level: "public",
  });
  const webcamRef = useRef(null);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    Storage.put("manolo.txt", "Hola esto es una prueba de manolo");
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
