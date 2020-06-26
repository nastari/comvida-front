import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
  loading: false,
  isForgot: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    // register

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

    // login
    case '@auth/login_success':
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });

    // update
    case '@user/update_request':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@user/update_success':
      return produce(state, (draft) => {
        draft.profile = action.payload;
        draft.loading = false;
      });
    case '@user/update_failure':
      return produce(state, (draft) => {
        draft.loading = false;
      });

    // log out

    case '@auth/sign_out':
      return produce(state, (draft) => {
        draft.profile = null;
      });

    // avatar input

    case '@user/file_success':
      return produce(state, (draft) => {
        draft.profile.avatar = action.payload;
        draft.profile.avatar_id = action.payload.id;
      });

    // forgot and reset
    case '@user/forgot_success':
      return produce(state, (draft) => {
        draft.isForgot = true;
      });

    case '@user/reset_success':
      return produce(state, (draft) => {
        draft.isForgot = false;
      });

    case '@user/delete_success':
      return produce(state, (draft) => {
        draft.profile = null;
      });

    default:
      return state;
  }
}
