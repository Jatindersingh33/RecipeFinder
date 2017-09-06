import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';
class App extends Component{
    render(){
        return(
            <div>
                <div><Link to='/favorites'>FAVORITE</Link></div>
                <h2> Recipe Finder </h2>
                <SearchRecipe/>
                <RecipeList/>
            </div>
        )
    }
}
export default App;