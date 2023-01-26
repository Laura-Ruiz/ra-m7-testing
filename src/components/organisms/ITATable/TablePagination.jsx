import { useContext } from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'

const TablePaginationStyled = styled(FlexBox)`
  ${Icon} {
    color: ${colors.blue};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-size: 2rem;

    &:hover {
      color: ${colors.blueDark};
    }

    &:first-child {
      ${({ hasPrevious }) => !hasPrevious && 'opacity: 0.25;'}
      ${({ hasPrevious }) => !hasPrevious && 'cursor: not-allowed;'}
    }

    &:last-child {
      ${({ hasNext }) => !hasNext && 'opacity: 0.25;'}
      ${({ hasNext }) => !hasNext && 'cursor: not-allowed;'}
    }
  }
`

function TablePagination() {
  const { state, dispatch } = useContext(TableContext)
  const { rowsPerPage, data, currentPage } = state
  const totalRows = data.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)
  const hasPrevious = currentPage > 1
  const hasNext = currentPage < totalPages

  const handlePrevious = () => {
    if (hasPrevious) {
      dispatch({
        type: Actions.SET_PAGINATION,
        payload: {
          page: currentPage - 1,
        },
      })
    }
  }

  const handleNext = () => {
    if (hasNext) {
      dispatch({
        type: Actions.SET_PAGINATION,
        payload: {
          page: currentPage + 1,
        },
      })
    }
  }

  return (
    <TablePaginationStyled
      hasPrevious={hasPrevious}
      hasNext={hasNext}
      align="center"
      justify="space-between"
      direction="row"
      w="auto"
      grow={0}
    >
      <Icon icon="chevron_left" onClick={handlePrevious} />
      <Text as="span" fontSize="14px">
        Página {currentPage} de: {totalPages}
      </Text>
      <Icon icon="chevron_right" onClick={handleNext} />
    </TablePaginationStyled>
  )
}

export default TablePagination
