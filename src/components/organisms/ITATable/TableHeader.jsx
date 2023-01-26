import React, { useContext } from 'react'
import styled from 'styled-components'
import { SortIcon } from './icons'
import { TableContext } from './store/context'
import { TableCell } from './styles'

const TableHeaderStyled = styled.thead``

function TableHeader() {
  const { state } = useContext(TableContext)
  const { columns } = state
  return (
    <TableHeaderStyled>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell as="th" key={col.id} isSorted={col.showSortBy}>
              {col.label}
              {col.showSortBy && <SortIcon colId={col.id} />}
            </TableCell>
          ))}
      </tr>
    </TableHeaderStyled>
  )
}

export default TableHeader
