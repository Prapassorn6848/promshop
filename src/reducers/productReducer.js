import { ADD_PRODUCT,DELETE_PRODUCT } from "../actions/types";

const initialState = {
    products:[]
};

const productReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_PRODUCT : 
            return{
                ...state,
                products:state.products.concat(action.product)
            }
        case DELETE_PRODUCT :
            return{
                ...state,
                products:state.products.filter((item)=>item.id != action.id)
            }
        default : return state
    }
}
export default productReducer;