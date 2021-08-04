import { Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Login from './containers/login';
import Home from './containers/home';
import Logout from './containers/logout';
import Signup from './containers/signup';
import Subreddits from './containers/subreddit';
import NewPostPage from './containers/newPost';
import NewSubreddit from './containers/newSubreddit';

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
            <Route exact path='/logout'>
                <Logout/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/signup'>
                <Signup/>
            </Route>
            <Route exact path='/newSubreddit'>
                <NewSubreddit/>
            </Route>
            <Route path='/subreddit'>
                {/* we can remove exact to add the name of the subreddit in the link and still match it to the subreddit but keep it last  */}
                <Subreddits/>
            </Route>
        </Switch>
            
    </>
}
