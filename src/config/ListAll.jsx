import axios from "axios";

const ListAll = async () => {
  const mentor = await axios.get("https://day-39-sm.onrender.com/mentor");
  const student = await axios.get("https://day-39-sm.onrender.com/student");
  const result = {
    mentor: mentor.data,
    student: student.data,
  };

  return result;
};

export default ListAll;
