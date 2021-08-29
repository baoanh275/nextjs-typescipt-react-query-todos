import React,{FC,useState} from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { ITask } from '../../src/lib/interface/ITask';
import Link from 'next/link';
import { useForm } from "react-hook-form";

const TodosPage: FC = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="form-todos">
            <input {...register("userID")}  className="input-todos"/>
            <input {...register("id")} className="input-todos"/>
            <input {...register("title")} className="input-todos"/>
            <input type="checkbox"  {...register("completed")}  className="input-todos"/>
           
            <input type="submit" />
        </form>
        </>
    )
};

export default TodosPage;