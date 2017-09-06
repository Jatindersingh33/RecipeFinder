import React, {Component} from 'react';
import {connect} from 'react-redux';
import {favoriteRecipes} from '../actions';

class RecipeItem extends Component{
constructor(){
    super();
    this.state={
        favorite : false
    }
}

favorite(recipe){
    console.log(recipe);
    this.props.favoriteRecipes(recipe);
    if(this.state.favorite === true){
        this.setState({favorite:false});
    }
    else{
        this.setState({favorite:true});
    }
}

    render(){
        let {recipe} = this.props;
        return(
            <div className='recipe-item'>
                {
                    this.props.star === true ?
                        this.state.favorite === true ?  
                        <div className="star" onClick={()=> this.favorite(recipe)}>
                        &#9733;
                        </div>
                        :
                        <div className="star" onClick={()=> this.favorite(recipe)}>
                        &#9734;
                        </div>
                    :
                    <div></div>
                }
               
                
                <div className='recipe-text'>
                    <a href={recipe.href}>
                        <h4 > {this.props.recipe.title} </h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img src={recipe.thumbnail}
                alt={recipe.title}
                className="recipe-image"/>
            </div>
        )
    }
}

export default connect(null, {favoriteRecipes})(RecipeItem);