const extraColProps = {
  isSorted: false,
  sortOrder: 'default',
  showSortBy: false,
}

// eslint-disable-next-line import/prefer-default-export
export const formatColumns = (columns) =>
  columns.map((col) => ({ ...extraColProps, ...col }))
