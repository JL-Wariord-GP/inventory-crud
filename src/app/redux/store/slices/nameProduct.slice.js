import {createSlice} from '@reduxjs/toolkit';

export const nameProductSlice = createSlice({
    name: 'nameProduct',
    initialState: '',
    reducers: {
        setNameProduct: (state, action) => action.payload
    }
})

export const {setNameProduct} = nameProductSlice.actions
export default nameProductSlice.reducer
