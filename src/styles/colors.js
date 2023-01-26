export default {
  logo: '#823434',
  clearBlueBg: '#E6F2F2',
  purple: '#8077A3',
  blue: '#0073E6',
  darkBlue: '#00308F',
  red: '#823434',
  tableBorder: '#E6E6E6',
  font: {
    base: '#444',
    headings: '#121212',
  },
  border: {
    clearBlueBg: '#B5DDDD',
  },
  shadow: {
    base: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  },
}

export const hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgb(${r}, ${g}, ${b})`
}
