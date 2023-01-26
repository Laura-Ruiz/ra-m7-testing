import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from '../components/atoms'
import { Body } from '../components/layout'
import { ITATable, tableToCSV } from '../components/organisms'
import { housesToDistricts } from '../helpers'
import { getHouses } from '../store/houses.slice'
import { colors, Container, FlexBox } from '../styles'

const ButtonsWrapper = styled(FlexBox)`
  margin-bottom: 1rem;

  ${Button} {
    margin-left: 0.5rem;
    background-color: white;
    color: ${colors.font.base};

    &.selected {
      background-color: ${colors.blue};
      color: white;
    }

    &.descargar {
      background-color: #2eb94e;
      color: white;
    }
  }
`

const tabs = {
  viviendas: 'viviendas',
  porBarrio: 'porBarrio',
}

function Data() {
  const [tab, setTab] = useState(tabs.viviendas)
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.houses.reqStatus)
  const { byId, allIds } = useSelector((state) => state.houses.houses)

  const tableRef = useRef(null)

  useEffect(() => {
    if (status === 'initial') dispatch(getHouses())
  }, [dispatch, status])

  const handleDownload = () => {
    tableToCSV(
      tableRef.current,
      tab === tabs.viviendas ? 'viviendas' : 'barrios',
    )
  }

  const columns = useMemo(
    () => [
      {
        id: 'title',
        label: 'Nombre',
        showSortBy: true,
      },
      {
        id: 'district',
        label: 'Barrio',
        showSortBy: true,
      },
      {
        id: 'price',
        label: 'Precio',
        showSortBy: true,
      },
      {
        id: 'city',
        label: 'Ciudad',
      },
      {
        id: 'type',
        label: 'Tipo',
      },
    ],
    [],
  )

  const data = useMemo(
    () =>
      allIds.map((id) => ({
        id,
        ...byId[id],
      })),
    [allIds, byId],
  )

  const columnsByDistrict = useMemo(
    () => [
      {
        id: 'district',
        label: 'Barrio',
        showSortBy: true,
      },
      {
        id: 'count',
        label: 'Cantidad',
        showSortBy: true,
      },
      {
        id: 'avgPrice',
        label: 'Precio promedio',
        cell: (row) => `${row.sum / row.count}`,
        showSortBy: true,
      },
      {
        id: 'maxPrice',
        label: 'Precio máximo',
        showSortBy: true,
      },
    ],
    [],
  )

  const dataByDistrict = useMemo(
    () => housesToDistricts(Object.values(byId)),
    [byId],
  )

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ButtonsWrapper direction="row" justify="flex-end">
          <Button
            className={tab === tabs.viviendas ? 'selected' : ''}
            onClick={() => setTab(tabs.viviendas)}
          >
            Viviendas
          </Button>
          <Button
            className={tab === tabs.porBarrio ? 'selected' : ''}
            onClick={() => setTab(tabs.porBarrio)}
          >
            Por barrio
          </Button>
          <Button className="descargar" onClick={handleDownload}>
            Descargar CSV
          </Button>
        </ButtonsWrapper>
        {tab === tabs.viviendas ? (
          <ITATable
            dataTestId="housesTable"
            columns={columns}
            data={data}
            isLoading={status.isLoading}
            tableRef={tableRef}
          />
        ) : (
          <ITATable
            dataTestId="districtsTable"
            columns={columnsByDistrict}
            data={Object.values(dataByDistrict)}
            isLoading={status.isLoading}
            tableRef={tableRef}
          />
        )}
      </Container>
    </Body>
  )
}

export default Data
