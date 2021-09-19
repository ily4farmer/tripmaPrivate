interface IDefaultState {
    fwomWhere: string[]
    whereTo: string[]
}


const defaultState:IDefaultState = {
    fwomWhere: ['SFO', 'ATL', 'LAX', 'STL', 'PVG', 'MSP', 'NRT'],
    whereTo: ['NRT', 'PVG', 'STL', 'ATL', 'MSP', 'SFO', 'JFK', 'LAX'],
}

enum SearchFormActionTypes {
    getDate = 'getDate'
}

interface getDate {
    type: SearchFormActionTypes.getDate
    payload: []
}

type FlightAction = getDate

export const searchFormReducer = (state = defaultState, action:FlightAction):IDefaultState => {
    switch (action.type) {
    
        default:
            return state
    }
}