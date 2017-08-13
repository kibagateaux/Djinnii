const INITIAL_STATE = {
  str:4,
  int:2,
  agy:5,
  stm:2
};

const updatedStats = (current, update) => {
  return Object.keys(update)
    .reduce((stats, stat) => {
      stats[stat] = current[stat]
        ? current[stat] + update[stat]
        : update[stat];
      return stats;
    }, {});
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case 'UPDATE_STATS': 
      const update = updatedStats(state, payload);
      return {...state, ...update};
    default: return state;
  }
};