import React, { useContext, useMemo } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Triangle } from '../../../atoms'
import { colors, hexToRGBA } from '../../../../styles'
import { IconHeaderStyled } from '../styles'
import { TableContext } from '../store/context'
import { Actions } from '../store/reducer'

const clearDarkBlue = hexToRGBA(colors.darkBlue, 0.2)

function getColor(arrow, isSorted, sortOrder) {
  switch (arrow) {
    case 'up':
      if (isSorted && sortOrder === 'default') return colors.darkBlue
      return clearDarkBlue
    case 'down':
      if (isSorted && sortOrder === 'reverse') return colors.darkBlue
      return clearDarkBlue
    default:
      return clearDarkBlue
  }
}

const SortIconStyled = styled(IconHeaderStyled)`
  flex-direction: column;
  justify-content: space-around;
  padding-top: 1px;
  padding-bottom: 1px;

  background-color: ${(props) => (props.isSorted ? 'clearYellow' : 'white')};

  &:hover {
    cursor: pointer;
  }
`

function SortIcon({ colId }) {
  const { state, dispatch } = useContext(TableContext)
  const selectedCol = state.columns.find((col) => col.id === colId)
  const upColor = useMemo(
    () => getColor('up', selectedCol.isSorted, selectedCol.sortOrder),
    [selectedCol.isSorted, selectedCol.sortOrder],
  )
  const downColor = useMemo(
    () => getColor('down', selectedCol.isSorted, selectedCol.sortOrder),
    [selectedCol.isSorted, selectedCol.sortOrder],
  )

  return (
    <SortIconStyled
      onClick={() => dispatch({ type: Actions.SORT_ROWS, payload: { colId } })}
      isSorted={selectedCol?.isSorted}
    >
      <Triangle w={10} h={6} direction="top" color={upColor} />
      <Triangle w={10} h={6} direction="bottom" color={downColor} />
    </SortIconStyled>
  )
}

SortIcon.propTypes = {
  colId: PropTypes.string.isRequired,
}

export default React.memo(SortIcon)
