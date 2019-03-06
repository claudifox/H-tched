import React from 'react'
import GuestListAppBar from '../components/GuestListAppBar'
import GuestTable from '../components/GuestTable'


export default class GuestList extends React.Component {

  render() {
    return (
      <div>
        <GuestListAppBar />
        <GuestTable />
      </div>
    )
  }
}
