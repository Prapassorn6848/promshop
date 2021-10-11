import { EDIT_USER,DELETE_PRODUCT,ADD_PRODUCT} from "./types";

export const addUser = (user) =>({
    type : ADD_USER,
    user:user
})

export const editUser = (id) =>({
    type :EDIT_USER,
    id:id
})


export const addProduct = (product) =>({
    type : ADD_PRODUCT,
    product:product
})


export const deleteProduct = (id) =>({
    type :DELETE_PRODUCT,
    id:id
})

