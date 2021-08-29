import React, {useRef,useContext} from 'react';
import TableComponent from '../../../src/features/todos/components/TableComponent'
import { useTask } from '../../../src/features/todos/api/getTask';
import { initColumn } from '../../../src/features/todos/hooks';







const ShowTodos = () => {

    
  
    const {data} = useTask();
    
 
    
    if(!!data){
    
    return (
        <>
          <div className="container "> 

            <TableComponent  columns={initColumn} data={data.data} />     
          </div>

           
        </>
    );
  }
  else return (
    <div>Loading</div>
  )
}

export default ShowTodos;