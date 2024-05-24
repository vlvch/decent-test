import { memo } from "react";

function Cards({ list, loading }) {
  return (
    <div className="container vh-100">
      <h1 className="m-3">All countries</h1>
      {loading ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-secondary m-5" role="status"></div>
        </div>
        :
        <div className="row row-cols-1 row-cols-md-4">
          {list.map((node) => <div key={node.name} className="card border-0 border-bottom border-white rounded-0">
            <div className="card-body">
            <a href={'/country/' + node.name} className="link-primary card-text">{node.flag} {node.name}</a>
            </div>
          </div>)}
        </div>
      }
    </div>
  )
}

export default memo(Cards);
