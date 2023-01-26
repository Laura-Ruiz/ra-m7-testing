import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { Text } from '../../atoms'
import { SelectGroup } from '../../molecules'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'

const TableTotalRowsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;

  ${Text} {
    margin-right: 0.5rem;
  }

  ${SelectGroup} {
    width: 3rem;
    font-size: 14px;
  }
`

function TableTotalRows() {
  const { state, dispatch } = useContext(TableContext)
  const { rowsPerPage } = state

  const handleChange = useCallback(
    (e) => {
      dispatch({
        type: Actions.SET_ROWS_PER_PAGE,
        payload: parseInt(e.target.value, 10),
      })
    },
    [dispatch],
  )

  return (
    <TableTotalRowsStyled>
      <Text fontSize="14px" as="span">
        Mostrar{' '}
      </Text>
      <SelectGroup
        id="rowsPerPage"
        label="Filas por página"
        hideLabel
        options={[
          { value: '10', text: '10' },
          { value: '25', text: '25' },
          { value: '50', text: '50' },
        ]}
        onChange={handleChange}
        value={`${rowsPerPage}`}
      />
    </TableTotalRowsStyled>
  )
}

export default TableTotalRows
