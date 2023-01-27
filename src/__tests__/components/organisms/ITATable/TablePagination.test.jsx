import { render, screen } from '@testing-library/react'
import { TableContext } from '../../../../components/organisms/ITATable/store/context'
import TablePagination from '../../../../components/organisms/ITATable/TablePagination'

const data = [
  {
    id: 1,
    title: 'Piso 1',
    price: 100000,
    image: 'https://kevinmamaqi.com/static/casas/1.jpg',
    type: 'garaje',
    city: 'madrid',
    district: 'Gotic',
    published: true,
    createdAt: '2020-05-01T00:00:00.000Z',
    updatedAt: '2020-05-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Piso 2',
    price: 838000,
    image: 'https://kevinmamaqi.com/static/casas/2.jpg',
    type: 'chalets',
    city: 'barcelona',
    district: 'Barceloneta',
    createdAt: '2020-03-04T00:13:44.000Z',
    updatedAt: '2020-03-04T00:13:44.000Z',
  }
]

const columns = [
  {
    id: 'title',
    label: 'Nombre',
    showSortBy: true,
  },
  {
    id: 'price',
    label: 'Precio',
    showSortBy: true,
  },
]

describe('TablePagination', () => {
  it('renders a table', () => {
    render(
      <TableContext.Provider
        value={{ state: { rowsPerPage: 10, data, columns, currentPage: 1 } }}
      >
        <TablePagination />
      </TableContext.Provider>,
    )
    expect(screen.getByText('Página 1 de: 1')).toBeInTheDocument()
  })
})
