import React from 'react'
import { Shimmer } from '../../atoms'
import { TableCell, TableStyled } from './styles'

function TableLoading({ rows = 8, columns = 5 }) {
  return (
    <TableStyled>
      <tbody>
        {Array(rows)
          .fill(0)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              {Array(columns)
                .fill(0)
                .map((__, j) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell key={j}>
                    <Shimmer />
                  </TableCell>
                ))}
            </tr>
          ))}
      </tbody>
    </TableStyled>
  )
}

export default React.memo(TableLoading)
