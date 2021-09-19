import kaneya from '../img/table/kaneya.png'
import flag from '../img/table/flag.png'
import shinjuku from '../img/table/shinjuku.png'
import shanghai from '../img/table/shanghai.png'
import nairobi from '../img/table/nairobi.png'
import seoul from '../img/table/seoul.png'
import { ISample } from '../types'


interface IDefaultState {
    japan: ISample[]
    sanFrancisco: ISample[]
}


const defaultState:IDefaultState = {
    japan: [
        {
            id: 1, 
            img: kaneya, 
            title: 'Hotel Kaneyamaen and Bessho SASA ', 
            span: '',
            price: null,
            text: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner."
        },

        {
            id: 2, 
            img: flag, 
            title: 'HOTEL THE FLAG 大阪市 ', 
            span: '',
            price: null,
            text: 'Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street.'
        },

        {
            id: 3, 
            img: shinjuku, 
            title: '9 Hours Shinjuku ', 
            span: '',
            price: null,
            text: 'Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!'
        }
    ],
    sanFrancisco: [
        {
            id: 1, 
            img: shanghai, 
            title: 'Shanghai, ', 
            span: 'China',
            price: '$598',
            text: "An international city rich in culture"
        },

        {
            id: 2, 
            img: nairobi, 
            title: 'Nairobi, ', 
            span: 'Kenya',
            price: '$1,248',
            text: 'Dubbed the Safari Capital of the World'
        },

        {
            id: 3, 
            img: seoul, 
            title: 'Seoul, ', 
            span: 'South Korea',
            price: '$589',
            text: 'This modern city is a traveler’s dream'
        }
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

export const tableContentReducer = (state = defaultState, action:TableAction):IDefaultState => {
    switch (action.type) {
    
        default:
            return state
    }
}