import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'
import './App.css';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <section className="main">
      <h1 className="title"><i class="fa-solid fa-receipt"></i> Expense Tracker <i class="fa-solid fa-receipt"></i></h1>

      <div className="input">
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </div>

      <div className="output">
        <Posts setCurrentId={setCurrentId}/>
      </div>

    </section>
  );
}

export default App;
