import logo from './assets/img/mock-logo.png';

function Navbar() {
    return (
        <nav className="Navbar">
            <img src={logo} alt=""/>

            <div className="NavbarLinks">
                <a href="">About</a>
                <a href="">Our menu</a>
                <a href="">Reserve a table</a>
            </div>

            <button>
                <span className="material-symbols-outlined">menu</span>
            </button>
        </nav>
    )
}

export default Navbar;