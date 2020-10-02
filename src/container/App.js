import React from 'react';
import styles from './App.module.css'
import {Route, NavLink, Switch} from 'react-router-dom'
// import PostsFullPost from "./PostsFullPost/PostsFullPost";
import InfiniteScrolling from "./InfiniteScrolling/InfiniteScrolling";
import Newpost from "../components/Newpost/Newpost";
import Fullpost from "../components/Fullpost/Fullpost";
import Register from "./Register/Register";
import Login from './Login/Login';
import Logout from './Logout/Logout';
// import {Pagination} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



class App extends React.Component{

    render() {
        return (
            <>
                {/*<header className={styles.Nav}>*/}
                {/*    <nav>*/}
                {/*        <ul>*/}
                {/*            /!*check on the active router link styling using css module*!/*/}
                {/*            <li><NavLink exact to="/" activeStyle = {{color:'deeppink'}}>Home</NavLink></li>*/}
                {/*            <li><NavLink exact to="/new-post" activeStyle = {{color: 'deeppink'}}>New Posts</NavLink></li>*/}
                {/*            <li><NavLink exact to ="/register" activeStyle = {{color: 'deeppink'}}>Register</NavLink></li>*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</header>*/}

                <Layout className="layout">
                    <Header>
                        <div className="logo" />

                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="/">
                                <NavLink exact to="/">
                                    {/*<Icon type="home" />*/}
                                    <span>Home</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="/new-post">
                                <NavLink exact to="/new-post">
                                    {/*<Icon type="home" />*/}
                                    <span>New Post</span>
                                </NavLink>
                            </Menu.Item>
                            {/*<Menu.Item key="/register">*/}
                            {/*    <NavLink exact to="/register">*/}
                            {/*        /!*<Icon type="home" />*!/*/}
                            {/*        <span>Resister</span>*/}
                            {/*    </NavLink>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="/login">
                                <NavLink exact to="/login">
                                    {/*<Icon type="home" />*/}
                                    <span>Login</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="/logout">
                                <NavLink exact to="/logout">
                                    {/*<Icon type="home" />*/}
                                    <span>Logout</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu>

                    </Header>
                </Layout>
                <Switch>
                    {/*<Route path='/' exact component={PostsFullPost}/>*/}
                    <Route path='/' exact component={InfiniteScrolling}/>
                    <Route path='/new-post' component={Newpost}/>
                    {/*<Route path='/register' component={Register}/>*/}
                    <Route path='/login' component={Login}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/:id' exact component={Fullpost}/>
                </Switch>

            </>
        );
    }
}

export default App;
