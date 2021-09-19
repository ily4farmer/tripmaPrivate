import hawai from '../img/flightTable/hawai.svg'
import hawai2 from '../img/flightTable/hawai2.svg'
import delta from '../img/flightTable/delta.svg'
import Japan from '../img/flightTable/Japan.svg'
import qantas from '../img/flightTable/qantas.svg'


interface IDefaultState {
    table: any[]
}


const defaultState:IDefaultState = {
    table: [
        {
            id: 1, avatar: hawai, 
            path: {title: '16h 45m', subtitle: 'Hawaiian Airlines'}, 
            time: '7:00AM - 4:15PM', stop: {title: '1 stop', stop: '2h 45m in HNL'},
            price: {title:624, subtitle: 'round trip'}
        },
        {
            id: 2, avatar: Japan, 
            path: {title: '18h 22m', subtitle: 'Japan Airlines'}, 
            time: '7:35 AM - 12:15 PM', stop: {title: '1 stop', stop: '50m in HKG'},
            price: {title:663, subtitle: 'round trip'}
        },
        {
            id: 3, avatar: hawai, 
            path: {title: '18h 04m', subtitle: 'Hawaiian Airlines'}, 
            time: '8:20 AM - 2:15 PM', stop: {title: '1 stop', stop: '1h 50m in PVG'},
            price: {title:690, subtitle: 'round trip'}
        },
        {
            id: 4, avatar: delta, 
            path: {title: '18h 52m', subtitle: 'Delta'}, 
            time: '9:47 AM - 4:15 PM', stop: {title: '1 stop', stop: '4h 05m in ICN'},
            price: {title:756, subtitle: 'round trip'}
        },
        {
            id: 5, avatar: hawai2, 
            path: {title: '16h 05m', subtitle: 'Hawaiian Airlines'}, 
            time: '11:15 AM - 7:45 PM', stop: {title: 'Nonstop', stop: ''},
            price: {title:837, subtitle: 'round trip'}
        },
        {
            id: 6, avatar: qantas, 
            path: {title: '15h 45m', subtitle: ''}, 
            time: '10:55 AM - 8:15 PM', stop: {title: 'Nonstop', stop: ''},
            price: {title:839, subtitle: ''}
        },
    ]
}

enum TableActionTypes {
    getTable = 'getTable'
}

interface GetTableItem {
    type: TableActionTypes.getTable
    payload: []
}

type TableAction = GetTableItem

export const tableReducer = (state = defaultState, action:TableAction):IDefaultState => {
    switch (action.type) {
    
        default:
            return state
    }
}