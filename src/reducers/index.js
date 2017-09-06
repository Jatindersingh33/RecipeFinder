import {combineReducers} from 'redux'
import {SET_RECIPES , FAVORITE_RECIPES} from '../actions';

function recipes(state = [],action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

function favoriteRecipes(state = [], action){
    switch(action.type){
        case FAVORITE_RECIPES:
            return state = [...state, action.recipe]
        default:
            return state;
    }
}

const rootReducers = combineReducers({recipes, favoriteRecipes});

export default rootReducers;