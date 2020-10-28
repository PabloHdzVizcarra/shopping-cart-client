import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({title}) => {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">{title}</a>
      </div>
      <div>
        {/* <a href="/one" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a> */}
      </div>
    </nav>
  )
}

NavBar.propTypes = {
 title: PropTypes.string.isRequired,
}

export default NavBar
