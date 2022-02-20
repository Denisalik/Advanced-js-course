import { actionTypes } from "src/redux/actionsTypes";

interface AuthState {
  token: string;
  error: string;
  loading: boolean;
}

const initialState: AuthState = {
  token: "",
  error: "",
  loading: false,
};

export const reducer = (
  state: AuthState = initialState,
  action: actionTypes
): AuthState => {
  switch (action.type) {
    // case actionStrings.FETCH_CATEGORIES:
    //     return {...state, loading: true}
    // case actionStrings.FETCH_CATEGORIES_SUCCESS:
    //     return {...state, categories: action.payload, loading: false, error: ""};
    // case actionStrings.FETCH_CATEGORIES_ERROR:
    //     return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
};
