import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/gym.jpeg" className="logonav"></img>
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* clase para hacer colapsable la nav bar collapse navbar-collapse */}
        <div class="" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link href="/" legacyBehavior>
                <a class="nav-link">
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href={"/usuarios"} legacyBehavior>
                <a class="nav-link">Usuarios</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href={"/personal"} legacyBehavior>
                <a class="nav-link">Personal</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href={"/admin"} legacyBehavior>
                <a class="nav-link">Panel admin</a>
              </Link>
            </li>
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
}
