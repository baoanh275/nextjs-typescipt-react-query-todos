import { useQuery } from 'react-query';
import axios from 'axios';


export const deleteTask = async (data : string) => {
  const res = await axios.delete(`http://localhost:3000/tasks/${data}`);
  return res.data;
}

