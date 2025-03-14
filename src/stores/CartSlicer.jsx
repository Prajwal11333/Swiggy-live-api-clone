import {createSlice} from "@reduxjs/toolkit"

const cart = createSlice({
   name:'cartSlicer',
   initialState:{
    // we took array  because i can take multiple objects as Restdata to send the checkout
    items:[],
    count:0,
   },
   reducers:{
    // functions
    // to add the items
    addItems:(state,action)=>{
      state.items.push({...action.payload,quantity:1})
      state.count++;
      console.log(state)
    },
    // to increase the existing element by increment
    IncrementItems:(state,action)=>{
        // to find object which needs to be increased use find
        const element= state.items.find(item=> item.id === action.payload.id)
        element.quantity+=1
        state.count++;
        console.log(state)
    },
    
    // decresing element by decrement
    Decrementitems:(state,action)=>{
        const element= state.items.find(item=> item.id === action.payload.id)
        // element quantity 1 means remove it
        if(element.quantity>1){
            element.quantity-=1
        }
        else{       
            state.items=state.items.filter(item=> item.id!=action.payload.id)
        }
        state.count--;
    }
}
})

export const {addItems,IncrementItems,Decrementitems} = cart.actions;
export default cart.reducer;
