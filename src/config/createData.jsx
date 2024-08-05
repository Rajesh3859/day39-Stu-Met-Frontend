import axios from "axios";

const createData = async (type, body) => {
  const result = await axios.post(
    `https://day-39-sm.onrender.com/${type}`,
    body
  );
  return result;
};

export default createData;
