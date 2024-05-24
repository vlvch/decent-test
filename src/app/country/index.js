import { memo, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navigate from "../../components/navigate";
import { getCurrentCountry } from "../../service";
import { formatNumber } from "../../utils";

const Country = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams()['*'].toLocaleLowerCase();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    getCurrentCountry(params)
      .then((data) => setData(data))
      .then(() => setLoading(false))
  }, [])

  return (
    <>
      <Navigate />
      <div className="container">
        <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-primary my-2">&laquo; Back</button>
      </div>
      {loading ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-secondary m-5" role="status"></div>
        </div>
        :
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={data[0].flags.svg} className="w-100 rounded border border-secondary" alt={data[0].flags.alt} />
            </div>
            <div className="col-6">
              <p className="h2">{data[0].name.common} {data[0].flag}</p>
              <p><b>Region</b>: {data[0].region}</p>
              <p><b>Subregion</b>: {data[0].subregion}</p>
              <p><b>Language</b>: {Object.values(data[0].languages)[0]}</p>
              <p><b>Area</b>: {formatNumber(data[0].area)} km²</p>
              <p><b>Population</b>: {formatNumber(data[0].population)} 👤</p>
              <p><b>Timezones</b>:</p>
              <p>{data[0].timezones.map((zone) => <span key={zone} className="badge text-bg-secondary m-1">{zone}</span>)}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default memo(Country);