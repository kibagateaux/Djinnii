import {

} from '@actions/actionNames';


INITIAL_STATE = {};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    default: {
      return {...state}
    }
  }
}