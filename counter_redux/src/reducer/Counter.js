
 const initialState = 0;
function Counter( state = initialState, action) {
    switch(action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - 1;
        default : return state;
    }
}

export default Counter;