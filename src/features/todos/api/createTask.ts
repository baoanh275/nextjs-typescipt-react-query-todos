
import axios from 'axios';

type IVariableProps = {
  id: string,
  name: string,
  title: string,
  completed: boolean,
}

export const createTask = async (data : IVariableProps) => {
  const res = await axios.post('http://localhost:3000/tasks',data);
  return res.data;
}

