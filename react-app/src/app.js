import { Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Login from './containers/login';
import Home from './containers/home';
import Signup from './containers/signup';
import NewPostPage from './containers/newPost';

export default function App()
{
    return <>  
        <Header/>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/newPost'>
                <NewPostPage/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/signup'>
                <Signup/>
            </Route>
        </Switch>
            
    </>
}
