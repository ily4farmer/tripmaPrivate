import shanghai from '../img/home/shanghai.png'
import sydney from '../img/home/sydney.png'
import kyoto from '../img/home/kyoto.png'


import maldives from '../img/home/maldives.png'
import Morocco from '../img/home/Morocco.png'
import Mongolia from '../img/home/Mongolia.png'
import { ISample } from '../types'


interface IDefaultState {
    flight: ISample[]
    residence: ISample[]
}


const defaultState:IDefaultState = {
    flight : [
        {
            id: 1, 
            img: shanghai, 
            title: 'The Bund, ', 
            span: 'Shanghai',
            price: '$598',
            text: 'China’s most international city'
        },

        {
            id: 2, 
            img: sydney, 
            title: 'Sydney Opera House, ', 
            span: 'Sydney',
            price: '$981',
            text: 'Take a stroll along the famous harbor'
        },

        {
            id: 3, 
            img: kyoto, 
            title: 'Kōdaiji Temple, ', 
            span: 'Kyoto',
            price: '$633',
            text: 'Step back in time in the Gion district'
        }
    ],
    residence: [{
        id: 1, 
        img: maldives, 
        title: 'Stay among the atolls in ', 
        span: 'Maldives',
        price: null,
        text: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
    },

    {
        id: 2, 
        img: Morocco, 
        title: 'Experience the Ourika Valley in ', 
        span: 'Morocco',
        price: null,
        text: 'Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.'
    },

    {
        id: 3, 
        img: Mongolia, 
        title: 'Live traditionally in ', 
        span: 'Mongolia',
        price: null,
        text: 'Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.'
    }]

}

enum TableActionTypes {
    getTable = 'getTable'
}

interface GetTableItem {
    type: TableActionTypes.getTable
    payload: []
}

type TableAction = GetTableItem

export const homeReducer = (state = defaultState, action:TableAction):IDefaultState => {
    switch (action.type) {
    
        default:
            return state
    }
}