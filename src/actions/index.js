export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  const increment = 1;
  return {
    type: INCREMENT,
    payload: increment
  }
};

export const decrement = () => {
  // Fill in this function
  const decrement = -1;
  return {
    type: DECREMENT,
    payload: decrement
  }
};
