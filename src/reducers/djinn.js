const INITIAL_STATE = {mood: 'lit'};
export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case '': 
      return;
    default: return state;
  }
};