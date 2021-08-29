import React from 'react';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { deleteTask } from '../api/deleteTask';
import { useRouter } from 'next/router';


const ButtonComponent = (props) => {
  
    const mutation =  useMutation(deleteTask)
    const router = useRouter();

    const onHandleDelete = () => {
        mutation.mutate(props[0].original.id)

        router.replace('/todos/show')
    }

    const onHandleEdit = () => {
        router.replace(`/todos/action/${props[0].original.id}`)
    }

    return (
        <div className="text-center">
        <Link href="/todos/action">
            <button className="btn btn-outline-primary" >Add</button>
        </Link>
        <button 
            className="btn btn-outline-info"
            onClick = {() => onHandleEdit()}
        >Edit</button>
        <button 
            className="btn btn-outline-danger"
            onClick = {() => onHandleDelete()}
        >Delete</button>
        </div>
    );
}

export default ButtonComponent;