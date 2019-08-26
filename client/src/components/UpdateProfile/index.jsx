import React from 'react'
import './style.scss'

export const UpdateProfile = () =>(
  <div className='update-wrapper'>
    <div className='updateProfile'>
      <div className='avatar' />
      <div className='full-name'>
        <div className='update-input-wrapper'>
          <label htmlFor='name-input'>Name</label>
          <input
            type='text'
            id='name-input'
            placeholder='Ivan Baloh'
            name='full-name'
          />
          <label htmlFor='email-input'>Email</label>
          <input
            type='email'
            id='email-input'
            placeholder='johndoe@gmail.com'
            name='email'
          />
        </div>
        <button type='button' className='update-profile'>Update Profile</button>
      </div>
    </div>
  </div>
)