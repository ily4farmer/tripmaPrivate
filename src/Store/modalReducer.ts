interface IDefaultState {
    show: boolean
}


const defaultState:IDefaultState = {
    show: false
}

enum ModalActionTypes {
    ShowModal = "ShowModal"
}

interface ShowModal {
    type: ModalActionTypes.ShowModal
    payload: boolean
}

type ModalAction = ShowModal

export const modalReducer = (state = defaultState, action:ModalAction):IDefaultState => {
    switch (action.type) {
        case ModalActionTypes.ShowModal:
            return {show: action.payload}
        default:
            return state
    }
}