import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token") || "";

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    return decodedToken.id;
  } catch (error) {
    console.log("ERROR FROM GET_DATA_FROM_TOKEN!");
    throw new Error(error.message);
  }
};
