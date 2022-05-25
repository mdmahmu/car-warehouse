import React from 'react';
import { useForm } from "react-hook-form";

const AddingItems = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(e);
        const url = `http://localhost:5000/cars`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                e.target.reset();
            }
            );

    };


    return (
        <div className="text-center">
            <h2 className="my-4">ADDING NEW ITEM</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">

                <input className="mb-2" placeholder="Name" {...register("name")} required />

                <input className="mb-2" type="email" placeholder="Email" {...register("email")} disabled />

                <input className="mb-2" placeholder="Image URL" {...register("img")} required />

                <textarea placeholder="Description" style={{ resize: 'none' }} {...register("description", { maxLength: 50 })} rows="2" cols="23" className="mb-2" required />
                {errors.description && <p>Max 45 characters.</p>}

                <input className="mb-2" placeholder="Supplier Name" {...register("supplier")} required />

                <input className="mb-2" placeholder="Price" type='number' step='0.01' {...register("price")} required />

                <input className="mb-2" placeholder="Quantity" type='number' {...register("quantity")} required />

                <input className="mb-2" defaultValue="0" placeholder="Already Sold" type='number' {...register("sold")} />

                <input className="mt-2 mb-4 bg-warning border-0 py-2" type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddingItems;