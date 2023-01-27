import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import SubHeader from '../../../components/layout/SubHeader'
import { store } from '../../../store/store'

describe('Label', () => {
  it('renders', () => {
    render(<Provider store={store}><SubHeader/></Provider>)

    expect(screen.getByText("Piso, chalet o garaje...")).toBeInTheDocument()
    expect(screen.getByText("Madrid, Barcelona o Zaragoza...")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()

  })

})