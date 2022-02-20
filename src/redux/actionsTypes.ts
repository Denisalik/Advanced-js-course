export enum ActionStrings {}
// FETCH_CATEGORIES = "FETCH_CATEGORIES",
// FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
// FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",

// interface fetchCategoriesSuccess {
//     type: actionStrings.FETCH_CATEGORIES_SUCCESS;
//     payload: Category[]
// }

// interface fetchCategoriesError {
//     type: actionStrings.FETCH_CATEGORIES_ERROR;
//     payload: string
// }

// interface fetchCategories {
//     type: actionStrings.FETCH_CATEGORIES
// }

export type ActionTypes = { type: string }; // fetchCategories | fetchCategoriesError | fetchCategoriesSuccess;
