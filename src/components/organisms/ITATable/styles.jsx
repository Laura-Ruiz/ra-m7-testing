import styled from 'styled-components'
import { colors, FlexBox } from '../../../styles'

export const TableCell = styled.td.attrs(({ isSorted, children }) => ({
  children: isSorted ? (
    <FlexBox direction="row" justify="space-between">
      {children}
    </FlexBox>
  ) : (
    children
  ),
}))`
  border: 1px solid;
  padding: 0.5rem;
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`

export const IconHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.dark};
  border-radius: 3px;
`
