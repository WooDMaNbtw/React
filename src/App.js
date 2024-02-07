import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Python", body: "Description"},
        {id: 3, title: "C#", body: "Description"},
        {id: 4, title: "TypeScript", body: "Description"}
    ])


    function addNewPost(e) {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        <PostForm/>
        <PostList posts={posts} title="Список основных постов"/>
    </div>
  );
}

export default App;
