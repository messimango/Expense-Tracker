import React from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/posts";
const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    function deleteFinal(id) {
        dispatch(deletePost(id));
        window.location.reload();
        return false;
    }

    return (
        <>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Month/Year</th>
                        <th>Paid</th>
                    </tr>

                </thead>

                <tbody>
                    {posts.map(data =>
                        <tr key={data.title} className="each">
                            <td> {data.title} </td>
                            <td> ${parseFloat(data.amount).toFixed(2)} </td>
                            <td> {data.type}</td>
                            <td> {(data.date).slice(5,7) + "-" + (data.date).slice(0,4)}</td>
                            <td><i class="check fa-solid fa-circle-check"></i></td>
                            <td><button  onClick={() => setCurrentId(data._id)}><i class="fa-solid fa-pen-to-square"></i></button></td>
                            <td><button onClick={() => deleteFinal(data._id)}><i class="fa-solid fa-trash"></i></button></td>
                            
                        </tr>)
                    }
                </tbody>

            </table>  
        </>
    );
}

export default Posts;