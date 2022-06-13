import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: '', amount: '', date: '', type: '', paid: '' } );

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postData));
            clear()    
        } else {
            dispatch(createPost(postData))
            clear()
        }

        
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', amount: '', date: '', type: '', paid: '' } )

    }  

    return (
        <div className='form'>
            <h3>{currentId ? 'Update Bill' : 'New Bill'}</h3>
            <form className="input-group col-lg-4" onSubmit={handleSubmit}>
                <div>                
                    <label>Name of Expense:
                        <input className="form-control" label="Title" onChange={(e) => setPostData({ ...postData, title: e.target.value })} name="title" value={postData.title}></input>
                    </label>
                    
                    <label>Expense Amount:
                        <input className="form-control" label="Amount" onChange={(e) => setPostData({ ...postData, amount: e.target.value })} name="amount" value={postData.amount} type="number" min="0.00" step="0.01" ></input>
                    </label>
                    
                    
                    <label>Expense Date:
                        <input required className="form-control" label="Date" onChange={(e) => setPostData({ ...postData, date: e.target.value })} name="date" value={postData.date} type="month" min="2022-01"></input>
                    </label>
                    
                    <label>Expense Type:
                        <input className="form-control" label="Type" onChange={(e) => setPostData({ ...postData, type: e.target.value })} name="type" value={postData.type} list="type" required></input>
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
                    </label>                
                    
                </div>
                <div className='button'>
                    <button className="btn btn-danger" onClick={clear} >Clear</button>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        </div>
        
    );
}

export default Form;