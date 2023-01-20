import {createStore} from 'redux'
const intialstate = {
    user:null
}
function appreducer(prevstate = intialstate,action){
    switch (action.type) {
        case 'Auth':
            return{
                ...prevstate,
                [action.field]:action.payload
            }
            
        
    
        default:
            return prevstate
    }
}

const store = createStore(appreducer)
export default store