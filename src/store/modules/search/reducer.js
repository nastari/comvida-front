import produce from 'immer';

const INITIAL_STATE = {
  profiles: [],
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@search/index_request':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@search/index_success':
      return produce(state, (draft) => {
        draft.profiles = action.payload;
        draft.loading = false;
      });
    case '@search/index_failure':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
