import axios from 'axios';

const url = 'https://mernexpense-tracker.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);