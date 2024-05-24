import { memo } from "react";

function Navigate() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <a className="navbar-brand text-light">Restcountries</a>
      </div>
    </nav>
  )
}

export default memo(Navigate);
