// Button.js
import React from "react";

const ButtonLambda = () => {
  const invokeLambda = async () => {
    try {
      const path = "/revisarRiesgo";
      const url = `https://8dyid462k8.execute-api.eu-west-1.amazonaws.com/main/revisarRiesgo`;
      const response = await axios.get(url);
      console.log("Response from Lambda:", response.data);
    } catch (error) {
      console.error("Error invoking Lambda function", error);
    }
  };

  return <button onClick={invokeLambda}>Llama a lambda</button>;
};

export default ButtonLambda;
