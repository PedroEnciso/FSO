import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAllNotes = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createNote = (note) => {
  const request = axios.post(baseUrl, note);
  return request.then((response) => response.data);
};

const updateNote = (id, note) => {
  const request = axios.put(`${baseUrl}/${id}`, note);
  return request.then((response) => response.data);
};

export default { getAllNotes, createNote, updateNote };
