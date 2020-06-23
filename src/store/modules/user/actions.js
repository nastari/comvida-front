// register

export function registerRequest(data) {
  return {
    type: '@user/register_request',
    payload: data,
  };
}
export function registerSuccess(payload) {
  return {
    type: '@user/register_success',
    payload,
  };
}
export function registerFailure(data) {
  return {
    type: '@user/register_failure',
    payload: data,
  };
}

// update

export function updateRequest(data) {
  return {
    type: '@user/update_request',
    payload: data,
  };
}
export function updateSuccess(data) {
  return {
    type: '@user/update_success',
    payload: data,
  };
}
export function updateFailure(data) {
  return {
    type: '@user/update_failure',
    payload: data,
  };
}

// forgot password

export function forgotRequest(data) {
  return {
    type: '@user/forgot_request',
    payload: data,
  };
}

export function forgotSuccess(data) {
  return {
    type: '@user/forgot_success',
    payload: data,
  };
}

export function forgotFailure(data) {
  return {
    type: '@user/forgot_failure',
    payload: data,
  };
}

// reset password

export function resetRequest(data) {
  return {
    type: '@user/reset_request',
    payload: data,
  };
}

export function resetSuccess(data) {
  return {
    type: '@user/reset_success',
    payload: data,
  };
}

export function resetFailure(data) {
  return {
    type: '@user/reset_failure',
    payload: data,
  };
}
