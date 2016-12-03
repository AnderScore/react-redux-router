import React from 'react';

import { Link } from 'react-router'

class Menu extends React.Component {
  render() {
    return (
        <ul>
            <li><Link to='/count'>count</Link></li>
            <li><Link to='/weather'>weather</Link></li>
            <li><Link to='/about'>about</Link></li>
        </ul>
    )
  }
}

export default Menu;