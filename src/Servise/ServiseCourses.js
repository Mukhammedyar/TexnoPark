import axios from "axios";

export async function getCourses(setCourses) {
  const res = await axios.get("http://localhost:3000/courses");
  return setCourses(res.data);
}
