const filterAndSort = (list) => {
  const countries = list.map((node) => {
    return { name: node.name.common, flag: node.flag }
  })

  return countries.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })
}

const formatNumber = (num) => {
  return Intl.NumberFormat('en-EN').format(num);
}

export { filterAndSort, formatNumber }
