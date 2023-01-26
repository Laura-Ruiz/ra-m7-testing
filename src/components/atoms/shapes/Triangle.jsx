import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../styles'

function Triangle({
  w = 20,
  h = 20,
  color = colors.font.base,
  direction = 'right',
  ...rest
}) {
  const points = {
    top: [`${w / 2},0`, `0,${h}`, `${w},${h}`],
    right: [`0,0`, `0,${h}`, `${w},${h / 2}`],
    bottom: [`0,0`, `${w},0`, `${w / 2},${h}`],
    left: [`${w},0`, `${w},${h}`, `0,${h / 2}`],
  }

  return (
    <svg width={w} height={h} {...rest}>
      <polygon points={points[direction].join(' ')} fill={color} />
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}

Triangle.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  color: PropTypes.string,
}

export default styled(Triangle)``
