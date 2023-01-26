import { createNextState } from '@reduxjs/toolkit'
import { formatColumns } from '../helpers'

export const initialState = {
  data: [],
  columns: [],
  isLoading: false,
  rowsPerPage: 10,
  currentPage: 1,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_PAGINATION: 'SET_PAGINATION',
  SET_ROWS_PER_PAGE: 'SET_ROWS_PER_PAGE',
  SORT_ROWS: 'SORT_ROWS',
  SET_INITIAL_DATA: 'SET_INITIAL_DATA',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_INITIAL_DATA: {
      const { columns, data, isLoading, rowsPerPage } = action.payload
      return createNextState(state, (draft) => {
        draft.columns = formatColumns(columns)
        draft.data = data
        draft.isLoading = isLoading
        draft.rowsPerPage = rowsPerPage
      })
    }

    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = formatColumns(action.payload)
      })

    case Actions.SET_PAGINATION:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload.page
      })

    case Actions.SET_ROWS_PER_PAGE:
      return createNextState(state, (draft) => {
        draft.rowsPerPage = action.payload
      })

    case Actions.SORT_ROWS:
      return createNextState(state, (draft) => {
        const { colId } = action.payload
        const idx = draft.columns.findIndex((col) => col.id === colId)
        if (idx === -1) return

        const { isSorted, sortOrder } = draft.columns[idx]

        // Sort Logic
        if (!isSorted) {
          draft.data.sort((a, b) => `${a[colId]}`.localeCompare(`${b[colId]}`))
          draft.columns[idx].isSorted = true
        } else {
          draft.data.sort((a, b) =>
            sortOrder === 'default'
              ? `${b[colId]}`.localeCompare(`${a[colId]}`)
              : `${a[colId]}`.localeCompare(`${b[colId]}`),
          )

          if (sortOrder === 'default') {
            draft.columns[idx].sortOrder = 'reverse'
          }

          if (sortOrder === 'reverse') {
            draft.columns[idx].sortOrder = 'default'
          }
        }

        // Remove other columns that might be sorting
        draft.columns = draft.columns.map((col) => {
          if (col.id !== colId) {
            return { ...col, isSorted: false }
          }
          return { ...col }
        })
      })

    default:
      return state
  }
}
