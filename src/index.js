import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FavoriteRecipe from './components/FavoriteRecipeList';
import './styles/index.css';
import {Provider} from 'react-redux';
import rootReducers from './reducers';
import {createStore} from 'redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
const store = createStore(rootReducers);


ReactDOM.render(
    <Provider store ={store}> 
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component= {App}></Route>
                <Route path='/favorites' component= {FavoriteRecipe}></Route>
                <Route></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)


