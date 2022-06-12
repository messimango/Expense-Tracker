import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { createPost } from "../../actions/posts";

const Form = () => {
    const [postData, setPostData] = useState({
        title: '', amount: '', date: '', type: '', paid: '' }
    );
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {

    }  

    return (
        <>
            <form className="form-box" onSubmit={handleSubmit}>
                <h3>New Bill</h3>
                <label>Name of Expense:
                    <input label="Title" onChange={(e) => setPostData({ ...postData, title: e.target.value })} name="title" value={postData.title}></input>
                </label>
                
                <label>Expense Amount:
                    <input label="Amount" onChange={(e) => setPostData({ ...postData, amount: e.target.value })} name="amount" value={postData.amount} type="number" min="0.00" step="0.01" ></input>
                </label>
                
                <br></br>

                <label>Expense Date:
                    <input label="Date" onChange={(e) => setPostData({ ...postData, date: e.target.value })} name="date" value={postData.date} type="month" min="2022-01"></input>
                </label>
                
                <label>Expense Type:
                    <input label="Type" onChange={(e) => setPostData({ ...postData, type: e.target.value })} name="type" value={postData.type} list="type" required></input>
                </label>                
                <datalist id="type">
                    <option value="Electric">Electric</option>
                    <option value="Water">Water</option>
                    <option value="Heating/Gas">Heating/Gas</option>
                    <option value="Phone">Phone</option>
                    <option value="Internet">Internet</option>
                    <option value="Cable">Electric</option>
                    <option value="Rent">Rent</option>
                    <option value="Morgage">Morgage</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Other">Other</option>
                </datalist>
                <button variant="danger" onClick={clear} >Clear</button>
                <button variant="primary" type='submit'>Submit</button>
            </form>
        </>
    );
}

export default Form;