import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem'

class RecipeList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.recipes.map((recipe,index)=>{
                        return(
                            <div key={index}>
                                <RecipeItem star = {true} key = {index} recipe={recipe}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapPropToState(state){
   return state;
}

export default connect(mapPropToState,null)(RecipeList);