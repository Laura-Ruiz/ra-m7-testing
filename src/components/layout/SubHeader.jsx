import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { colors, Container, dimensions, FlexBox } from '../../styles'
import { Button, Icon } from '../atoms'
import { SelectGroup } from '../molecules'
import {
  getHouses,
  setSelectedCity,
  setSelectedType,
} from '../../store/houses.slice'

const SubHeaderStyled = styled(FlexBox)`
  padding-top: ${dimensions.spacing.xl};
  padding-bottom: ${dimensions.spacing.xl};
  background-color: ${colors.clearBlueBg};
  border-top: 1px solid ${colors.border.clearBlueBg};
  border-bottom: 1px solid ${colors.border.clearBlueBg};
`

const FormStyled = styled(FlexBox).attrs({ as: 'form' })`
  ${SelectGroup} {
    &:first-of-type {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      margin-right: 1rem;
    }
  }

  ${Button} {
    background-color: ${colors.blue};
  }
`

function SubHeader({ ...props }) {
  const dispatch = useDispatch()
  const { types, cities } = useSelector((state) => state.houses.houses)
  const { status } = useSelector((state) => state.houses.reqStatus)

  useEffect(() => {
    if (status === 'initial') dispatch(getHouses())
  }, [dispatch, status])

  const cityOptions = cities.map((city) => ({ value: city, text: city }))
  const typeOptions = types.map((type) => ({ value: type, text: type }))
  return (
    <SubHeaderStyled {...props}>
      <Container>
        <FormStyled direction="row" align="center">
          <SelectGroup
            id="type"
            label="Tipo"
            defaultText="Piso, chalet o garaje..."
            defaultValue="Piso, chalet o garaje..."
            hideLabel
            options={typeOptions}
            onChange={(e) => dispatch(setSelectedType(e.target.value))}
          />

          <SelectGroup
            id="ciudad"
            label="Ciudad"
            defaultText="Madrid, Barcelona o Zaragoza..."
            defaultValue="Madrid, Barcelona o Zaragoza..."
            hideLabel
            options={cityOptions}
            onChange={(e) => dispatch(setSelectedCity(e.target.value))}
          />

          <Button>
            <Icon icon="search" />
          </Button>
        </FormStyled>
      </Container>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
