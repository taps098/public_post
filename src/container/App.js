import React from 'react';
import styles from './App.module.css'
import {Route, NavLink, Switch} from 'react-router-dom'
import PostsFullPost from "./PostsFullPost/PostsFullPost";
import Newpost from "../components/Newpost/Newpost";
import Fullpost from "../components/Fullpost/Fullpost";
import Register from "./Register/Register";


class App extends React.Component{

    render() {
        return (
            <>
                <header className={styles.Nav}>
                    <nav>
                        <ul>
                            {/*check on the active router link styling using css module*/}
                            <li><NavLink exact to="/" activeStyle = {{color:'deeppink'}}>Home</NavLink></li>
                            <li><NavLink exact to="/new-post" activeStyle = {{color: 'deeppink'}}>New Posts</NavLink></li>
                            <li><NavLink exact to ="/register" activeStyle = {{color: 'deeppink'}}>Register</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/' exact component={PostsFullPost}/>
                    <Route path='/new-post' component={Newpost}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/:id' exact component={Fullpost}/>
                </Switch>

            </>
        );
    }
}

export default App;
