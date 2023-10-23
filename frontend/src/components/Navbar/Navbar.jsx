const Navbar = () => {

  const addingSymbols = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0.625rem 0.75rem",
    backgroundSize: "1rem"
  }
  return (
    <nav className="flex flex-row flex-grow w-full gap-2 justify-between">
      <input className="py-1 pl-12" placeholder="search" type="Search" style={addingSymbols}/>
      <ul className="flex flex-row gap-12 py-1">
        <li><a>Home</a></li>
        <li><a>Community</a></li>
        <li><a>Emergency Services</a></li>
        <li><a>Help</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;