import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/register_request':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@user/register_success':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case '@user/register_failure':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case '@auth/login_success':
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });
    case '@user/update_request':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@user/update_success':
      console.log(action.payload);
      return produce(state, (draft) => {
        draft.profile = action.payload;
        draft.loading = false;
      });
    case '@user/update_failure':
      return produce(state, (draft) => {
        draft.loading = false;
      });

    case '@auth/sign_out':
      return produce(state, (draft) => {
        draft.profile = null;
      });
    default:
      return state;
  }
}
