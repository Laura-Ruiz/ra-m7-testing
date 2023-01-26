import { useEffect, useContext } from 'react'
import { PropTypes } from 'prop-types'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableLoading from './TableLoading'
import { tableToCSV } from './helpers'

function Table({
  columns,
  data,
  showHeader = true,
  isLoading = false,
  rowsPerPage = 10,
  tableRef,
  dataTestId = 'ITATable',
}) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({
      type: Actions.SET_INITIAL_DATA,
      payload: { columns, data, isLoading, rowsPerPage },
    })
  }, [data, columns, dispatch, isLoading, rowsPerPage])

  return isLoading ? (
    <TableLoading />
  ) : (
    <>
      <TableStyled ref={tableRef} data-testid={dataTestId}>
        {showHeader && <TableHeader />}
        <TableBody />
      </TableStyled>
      <TableFooter />
    </>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      cell: PropTypes.func,
      showSortBy: PropTypes.bool,
      isHidden: PropTypes.bool,
    }),
  ),
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
  showHeader: PropTypes.bool,
  isLoading: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  dataTestId: PropTypes.string,
  tableRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export { tableToCSV }
export default ITATable
