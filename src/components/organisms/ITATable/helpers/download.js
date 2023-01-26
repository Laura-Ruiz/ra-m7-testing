export function downloadCSVFile(data, csvName) {
  const csvFile = new Blob([data], { type: 'text/csv' })
  const tempLink = document.createElement('a')
  tempLink.download = `${csvName || 'table'}.csv`
  const url = window.URL.createObjectURL(csvFile)
  tempLink.href = url
  tempLink.style.display = 'none'
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
}

export function tableToCSV(currentRef, csvName) {
  const csvData = []
  const rows = currentRef.getElementsByTagName('tr')
  for (let i = 0; i < rows.length; i += 1) {
    const cols = rows[i].querySelectorAll('td,th')
    const csvRow = []
    for (let j = 0; j < cols.length; j += 1) {
      csvRow.push(cols[j].innerText)
    }
    csvData.push(csvRow.join(','))
  }
  const data = csvData.join('\n')
  downloadCSVFile(data, csvName)
}
