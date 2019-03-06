import React from 'react'
import GuestListAppBar from '../components/GuestListAppBar'
import GuestTable from '../components/GuestTable'


export default class GuestList extends React.Component {

  render() {
    const { logOut, currentCouple } = this.props
    return (
      <div>
        <GuestListAppBar logOut={logOut} currentCouple={currentCouple} />
        <GuestTable />
      </div>
    )
  }
}
