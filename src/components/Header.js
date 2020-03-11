import React from 'react'

function Header ()
{
  return (
  <header className="Header">
    <h2> Weather Header </h2>
      <header className="citiesNav">
        <a href="/?city=Dallas">Dallas </a>
        <a href="/?city=Savannah">Savannah </a>
        <a href="/?city=Nashville">Nashville </a>
        <a href="/?city=Baton Rouge">Baton Rogue </a>
      </header>
  </header>

);
}

export default Header;
