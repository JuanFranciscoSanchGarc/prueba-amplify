/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
"use strict";
const AWS = require("aws-sdk");

exports.handler = async (event) => {
  try {
    const fileKey = event.fileKey;
    const type = event.type;
    const url = await getSignedUrl(fileKey, type);
    if (url === -1) {
      throw new Error("Error obteniendo la URL firmada");
    }
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 200,
      url,
    };
  } catch (error) {
    console.error(error.message);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 500,
      text: "Error interno del servidor",
    };
  }
};

const getSignedUrl = (fileKey, type) =>
  new Promise((resolve) => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: "hackathon-aws",
      Key: fileKey,
      Expires: 600,
      ContentType: type,
    };
    s3.getSignedUrl("putObject", params, (error, url) => {
      if (error) {
        console.error("Error obteniendo la URL firmada", error);
        resolve(-1);
        return;
      }
      resolve(url);
    });
  });
