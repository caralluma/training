import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Quote from './Quote';

class Home extends React.Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/quote' component={Quote}/>
                </Switch>
            </main>);
    }
}

export default Home;
