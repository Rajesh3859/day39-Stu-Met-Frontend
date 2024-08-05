import axios from "axios";

const AddingStudentsToMentor = async (body) => {
  const result = await axios.post(
    "https://day-39-sm.onrender.com/assignmentor/newMentor",
    body
  );
  return result;
};

export default AddingStudentsToMentor;
