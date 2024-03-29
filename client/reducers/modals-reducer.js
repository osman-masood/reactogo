import { OPEN_MODAL_LOGIN, CLOSE_MODAL_LOGIN } from 'modals.js';

const initialState = Immutable.Map({
  isLoginModalOpen: false,
});

function modals(state = initialState, action) {
  switch(action.type) {
    case (OPEN_MODAL_LOGIN): return state.set('isLoginModalOpen', true);
    case (CLOSE_MODAL_LOGIN): return state.set('isLoginModalOpen', false);
    default: return state;
  }
}

export default modals;
