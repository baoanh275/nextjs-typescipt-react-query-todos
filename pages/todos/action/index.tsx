import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import { createTask } from '../../../src/features/todos/api/createTask';

type FormValues = {
    id: string,
    name: string,
    title: string,
    completed: boolean,
}

const AddPage = () => {

    const { register, handleSubmit,formState: { errors } } = useForm<FormValues>();  
    const router = useRouter();
    const mutation =  useMutation(createTask,
            {
                onSuccess: ()=>router.replace('/todos/show')
            }
        )
        
    const onSubmit = data => mutation.mutate(data);


    return (
        <div className="container mt-5" >
            <form onSubmit={handleSubmit(onSubmit)} className="w-25">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">UserID</label>
                    <input type="text"  {...register("id",{ required: true })} className="form-control" placeholder="Nhập id"/>
                    {errors.id &&  <div className="text-danger"> This field is required</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text"  {...register("name",{ required: true })} className="form-control" placeholder="Nhập name"/>
                    {errors.name &&  <div className="text-danger"> This field is required</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text"  {...register("title",{ required: true })} className="form-control" placeholder="Nhập title"/>
                    {errors.title &&  <div className="text-danger"> This field is required</div>}
                </div>
                <div className="align-items-center">    
                    <label htmlFor="exampleFormControlInput1" className="form-label">Completed</label>
                    <input type="checkbox" {...register("completed",{ required: true })}/>
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

export default AddPage;