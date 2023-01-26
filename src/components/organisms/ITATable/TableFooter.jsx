import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../../styles'
import TablePagination from './TablePagination'
import TableTotalRows from './TableTotalRows'

const TableFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem;
  border: 1px solid ${colors.tableBorder};
  border-top: 0;
  width: 100%;
`

function TableFooter({ showPagination = true, showTotal = true }) {
  return (
    <TableFooterStyled>
      {showPagination && <TablePagination />}
      {showTotal && <TableTotalRows />}
    </TableFooterStyled>
  )
}

TableFooter.propTypes = {
  showPagination: PropTypes.bool,
  showTotal: PropTypes.bool,
}

export default TableFooter
