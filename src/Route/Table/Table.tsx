import React, { FC, Fragment } from 'react'
import ContentTable from '../../Components/ContentTable/ContentTable'
import TableExample from '../../Components/TableExample/TableExample'

const Table:FC = () => {
    return (
        <Fragment>
            <ContentTable/>
            <TableExample/>
        </Fragment>
    )
}

export default Table
