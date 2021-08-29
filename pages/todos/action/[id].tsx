
import { useRouter } from 'next/router';
import {useTaskByID} from '../../../src/features/todos/api/getTask'
import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";

import { useMutation } from 'react-query';
import {editTask} from '../../../src/features/todos/api/editTask'



type FormValues = {
    id: string,
    name: string,
    title: string,
    completed: boolean,
}

const EditPage = () => {

    const {
        query: { id },
      } = useRouter();

    const router = useRouter();
    const { register, handleSubmit,setValue,formState: { errors } } = useForm<FormValues>();  
  
    

    const mutation =  useMutation(editTask,
        {
            onSuccess: ()=>router.replace('/todos/show')
        }
    )
    
    const onSubmit = (data) => mutation.mutate(data);
    if(typeof id !== undefined)
    {
       
        const task = useTaskByID(id).data;  
               
      
        
            
        

    return (
        <div className="container mt-5" >
        <form onSubmit={handleSubmit(onSubmit)} className="w-25">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">UserID</label>
                <input 
                    type="text"  
                    {...register("id")} 
                    className="form-control" 
                    placeholder="Nhập id"
                    value = {!!task ? task.data.id : ''}
                 
                   
                   
                />
                {errors.id &&  <div className="text-danger"> This field is required</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input 
                    type="text"  
                    {...register("name")} 
                    className="form-control" 
                    placeholder="Nhập name"
                    defaultValue = {!!task ? task.data.name : ''}
                />
                {errors.name &&  <div className="text-danger"> This field is required</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input 
                    type="text"  
                    {...register("title")} 
                    className="form-control" 
                    placeholder="Nhập title"
                    defaultValue = {!!task ? task.data.title : ''}
                />
                {errors.title &&  <div className="text-danger"> This field is required</div>}
            </div>
            <div className="align-items-center">    
                <label htmlFor="exampleFormControlInput1" className="form-label">Completed</label>
                <input 
                    type="checkbox" 
                    {...register("completed")}
                    defaultValue = {!!task ? task.data.completed : ''}
                />
                {errors.completed &&  <div className="text-danger"> This field is required</div>}
            </div>
            <button type="submit" className="btn btn-outline-success"> Submit</button>
            <Link href="/todos/show">
                <button type="button" className="btn btn-outline-primary" >Trở lại</button>
            </Link>

           
           
            
        </form>
    </div>
    );

    }
    else {
        return (
            <div>
                Loading.....
            </div>
        )
    }
}

export default EditPage;