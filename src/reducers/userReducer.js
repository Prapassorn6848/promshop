import { ADD_USER,EDIT_USER } from "../actions/types";

const initialState = {
    user:[]
};

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_USER : 
            return{
                ...state,
                user:state.user.concat(action.user)
            }
        case EDIT_USER :
            return{
                ...state,
                user:state.user.map((item)=>
                    item.id === action.user.id
                    ? {
                        ...item,
                        passwd:action.user.passwd,

                    }
                    :item
                )
            }
        default : return{state}
    }
}
export default userReducer;