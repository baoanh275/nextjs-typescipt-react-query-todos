import axios from 'axios';

type IVariableProps = {
  id: string,
  name: string,
  title: string,
  completed: boolean,
}

export const editTask = async (data : IVariableProps) => {
  const res = await axios.put(`http://localhost:3000/tasks/${data.id}`,data);
  return res.data;
}
