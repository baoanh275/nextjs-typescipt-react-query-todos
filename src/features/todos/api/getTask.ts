import { useQuery } from 'react-query';
import axios from 'axios';

export const getTask = async ()=> {
    return  await axios.get(`http://localhost:3000/tasks`);
  };

  export const getTaskByID = async (id)=> {
    return  await axios.get(`http://localhost:3000/tasks/${id}`);
  }; 

export const useTask = () => {
    return useQuery({
      queryKey: 'tasks',
      queryFn: () => getTask(),
    });
};

export const useTaskByID = (id) => {
  return useQuery({
    queryKey: `task-${id}`,
    queryFn: () => getTaskByID(id),
  });
};