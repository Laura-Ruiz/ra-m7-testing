import { render, screen } from '@testing-library/react'
import  { TableContext } from '../../../../components/organisms/ITATable/store/context'
import TableBody from '../../../../components/organisms/ITATable/TableBody'

describe('TableHeader', () => {
  const data =  [
    {
      "id": 1,
      "title": "Piso 1",
      "price": 100000,
      "image": "https://kevinmamaqi.com/static/casas/1.jpg",
      "type": "garaje",
      "city": "madrid",
      "district": "Gotic",
      "published": true,
      "createdAt": "2020-05-01T00:00:00.000Z",
      "updatedAt": "2020-05-01T00:00:00.000Z"
    },

    {
      "id": 2,
      "title": "Piso 2",
      "price": 838000,
      "image": "https://kevinmamaqi.com/static/casas/2.jpg",
      "type": "chalets",
      "city": "barcelona",
      "district": "Barceloneta",
      "createdAt": "2020-03-04T00:13:44.000Z",
      "updatedAt": "2020-03-04T00:13:44.000Z"
      
    }]

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
      <TableContext.Provider value={{state:{rowsPerPage:10, data, columns, currentPage:1}}}>
        <TableBody />
      </TableContext.Provider>,
    )
    expect(screen.getByText('Piso 1')).toBeInTheDocument()
    expect(screen.getByText('Piso 2')).toBeInTheDocument()

    expect(screen.getByText('Piso 1')).toBeInTheDocument()
    expect(screen.getByText('838000')).toBeInTheDocument()

  })
})
