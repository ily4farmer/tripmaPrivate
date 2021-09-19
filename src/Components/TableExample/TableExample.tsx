import React, { FC, Fragment } from 'react'
import { useTypeSelector } from '../../Store'
import SampleComponent from '../SampleComponent/SampleComponent'

const TableExample:FC = () => {
    const {japan, sanFrancisco} = useTypeSelector(state => state.tableContent)

    function japanTitle() {
        return <h2 className="section__title">Find <span className="flight__color">places to stay</span> in Japan</h2>
    }

    function sanFranciscoTitle() {
        return <h2 className="section__title">People in <span className="flight__color">San Francisco</span>also searched for</h2>
    }

    return (
        <Fragment>
            <SampleComponent item={japan} titleExample={japanTitle}/>
            <SampleComponent item={sanFrancisco} titleExample={sanFranciscoTitle}/>
        </Fragment>
    )
}

export default TableExample
