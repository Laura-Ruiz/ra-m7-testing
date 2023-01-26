import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PropTypes } from 'prop-types'
import { store } from '../store/store'

function RenderProviders({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: RenderProviders, ...options })

// re-export everything
export * from '@testing-library/react'

export { customRender as render }

RenderProviders.propTypes = {
  children: PropTypes.node.isRequired,
}
