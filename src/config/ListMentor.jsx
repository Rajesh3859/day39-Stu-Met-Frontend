import axios from "axios";

const ListMentor = async (mentorID) => {
  const result = await axios.get(
    `https://day-39-sm.onrender.com/mentor/${mentorID}`
  );
  return result.data;
};
export default ListMentor;
