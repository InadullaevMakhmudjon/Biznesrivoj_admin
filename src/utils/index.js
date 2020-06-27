export const getHeaders = (getState) => ({
  Authorization: `Bearer ${getState().auth.token}`,
  'Content-type': 'application/json',
});


export const createMarkup = (text) => ({ __html: text });
