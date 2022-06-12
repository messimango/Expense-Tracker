import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'
import './App.css';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section className="main">
      <h1 className="title"><i class="fa-solid fa-receipt"></i> Expense Tracker <i class="fa-solid fa-receipt"></i></h1>

      <div className="input">
        <Form />
      </div>

      <div className="output">
        <Posts />
      </div>

    </section>
  );
}

export default App;
