export const initialstate=0
export const reducer=(state,action)=>{
    if(action.type==="USER")
   { return action.payload}
   return state
}