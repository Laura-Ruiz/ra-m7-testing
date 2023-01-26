import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, rowsPerPage, currentPage } = state
  return (
    <tbody>
      {data
        .slice(
          (currentPage - 1) * rowsPerPage,
          (currentPage - 1) * rowsPerPage + rowsPerPage,
        )
        .map((d) => (
          <tr key={d.id}>
            {columns
              .filter((col) => !col.isHidden)
              .map((col) => (
                <TableCell key={`${d.id}-${col.id}`}>
                  {col.cell ? col.cell(d) : d[col.id]}
                </TableCell>
              ))}
          </tr>
        ))}
    </tbody>
  )
}

export default TableBody
