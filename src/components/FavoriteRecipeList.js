import React , {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';

class FavoriteRecipe extends Component{
    render(){
        return(
            <div>
                <div><Link to ='/'>HOME</Link></div>
                <h3>Favorite Recipes</h3>
                {
                    this.props.favoriteRecipes.map((recipe,index)=>{
                        return(
                            <RecipeItem star ={false} key ={index} recipe = {recipe}/>
                        )
                    })
                }
            </div>

        )
    }
   
}

function mapToState(state){
    return{
        favoriteRecipes : state.favoriteRecipes
    }
}

export default connect(mapToState, null)(FavoriteRecipe);