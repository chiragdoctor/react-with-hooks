const initialState = {
  loan: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APPLY':
      return { ...state, loan: true };

    default:
      return state;
  }
};
