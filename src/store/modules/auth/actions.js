export function loginRequest(data) {
  return {
    type: '@auth/login_request',
    payload: data,
  };
}

export function loginSuccess(payload) {
  return {
    type: '@auth/login_success',
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: '@auth/login_failure',
    payload,
  };
}

export function singOut() {
  return {
    type: '@auth/sign_out',
  };
}
