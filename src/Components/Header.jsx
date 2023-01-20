import React from 'react'

const Header = ({ selectTeam, teamMemberCount }) => {
  return (
    <div className='text-center mt-3 mb-5'>
      <h1 className='fw-bolder text-center text-danger m-3'>Team Members Allocation App</h1>
      <h3 className='text-white'>{selectTeam} has {teamMemberCount} Members</h3>
    </div>
  )
}
//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
export default Header
