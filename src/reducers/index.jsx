import { combineReducers } from "redux";
import * as type from "../actions/types";

// We are expecting the state to be false
const loadingError = (state = false, action) => {
    switch (action.type) {
        case type.LOADING_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
};

const loadingInProgress = (state = false, action) => {
    switch (action.type) {
        case type.LOADING_IN_PROGRESS:
            return action.isLoading;
        default:
            return state;
    }
};

const articles = (state = [], action) => {
    switch (action.type) {
        case type.LOADING_SUCCESS:
            return action.articles;
        case type.CLEAR_ARTICLES:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    loadingError,
    loadingInProgress,
    articles,
});