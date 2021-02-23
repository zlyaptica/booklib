const FIND_POST = 'FIND_POST'

let initialState = ''

const findTextPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_POST:
            return action.text
        default:
            return state
    }
}

export const findPost = (text) => ({type: FIND_POST, text})

export {findTextPostReducer}