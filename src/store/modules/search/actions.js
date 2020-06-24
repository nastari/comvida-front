export function indexRequest(uf, city) {
  console.log('e nada na action tbm');
  return {
    type: '@search/index_request',
    payload: { uf, city },
  };
}

export function indexPageRequest(page, uf, city) {
  return {
    type: '@search/index_page_request',
    payload: { page, uf, city },
  };
}

export function indexSuccess(payload) {
  return {
    type: '@search/index_success',
    payload,
  };
}
export function indexFailure(data) {
  return {
    type: '@search/index_failure',
    payload: data,
  };
}
