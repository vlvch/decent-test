import { memo, useEffect, useState } from 'react';
import { getCountries } from '../../service';
import Navigate from '../../components/navigate';
import Cards from '../../components/cards';
import { filterAndSort } from '../../utils';

const Main = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    getCountries()
      .then((data) => filterAndSort(data))
      .then((data) => setList(data))
      .then(() => setLoading(false))
  }, [])

  return (
    <>
      <Navigate/>
      <Cards list={list} loading={loading} />
    </>
  )
}

export default memo(Main);