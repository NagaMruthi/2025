
import { Link } from "react-router-dom";
function Nav(){
    return(<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor:"red"}}>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Count">Count</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/todo">Todo List</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Count</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Card</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Todo</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>)
}
export default Nav;