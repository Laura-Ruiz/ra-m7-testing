import { render, screen } from '@testing-library/react'
import  { TableContext } from '../../../../components/organisms/ITATable/store/context'
import TableHeader from '../../../../components/organisms/ITATable/TableHeader'

describe('TableHeader', () => {
  const columns = [{
    id: 'title',
    label: 'Nombre',
    showSortBy: true,
  },
  {
    id: 'price',
    label: 'Precio',
    showSortBy: true,
  }]


  it('renders a table', () => {
    render(
      <TableContext.Provider value={{state:{columns}}}>
        <TableHeader />
      </TableContext.Provider>,
    )
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Precio')).toBeInTheDocument()

  })
})
