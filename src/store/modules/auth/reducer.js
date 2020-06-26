import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/login_request':
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case '@auth/login_success':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case '@auth/login_failure':
      return produce(state, (draft) => {
        draft.loading = false;
      });

    case '@auth/sign_out':
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });

    case '@user/delete_success':
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });

    default:
      return state;
  }
}
