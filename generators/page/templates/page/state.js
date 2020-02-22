export const initialState = {
    list: [],
    playfield: [],
    deck: [],
    grave: [],
    isLoading: true,
    error: null,
    selected: false,
};

export const SET_LIST = "Start/SET_LIST";
export const ADD_LIST = "Start/ADD_LIST";
export const UPDATE_LIST = "Start/UPDATE_LIST";
export const FINISH_LOADING = "Start/FINISH_LOADING";
export const START_LOADING = "Start/START_LOADING";
export const RESET = `Start/RESET`;
export const SELECT = `Start/SELECT`;
export const finishLoading = () => ({
    type: FINISH_LOADING
});

export const startLoading = () => ({
    type: START_LOADING,
});

export const setList = (list) => ({
    type: SET_LIST,
    payload: list
});

export const updateList = (newItem) => ({
    type: UPDATE_LIST,
    payload: newItem
});

export const reset = () => ({
    type: RESET
});

export default function StartReducer(state = initialState, {type, payload}) {
    switch (type) {
        case RESET:
            return {
                ...initialState,
            };
        case UPDATE_LIST:
            return {
                ...state,
                list: state.list.map((item) => {
                    if (item.id === payload.id) {
                        return payload;
                    }
                    return item;
                }),
            };
        case ADD_LIST:
            return {
                ...state,
                list: state.list.concat([payload])
            };
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case SELECT:
            return {
                ...state,
                selected: payload,
            };
        case SET_LIST:
            return {
                ...state,
                list: payload
            };
        default:
            return state;
    }
}
