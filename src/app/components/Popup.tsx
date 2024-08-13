import React from 'react'

export default function B5() {
  return (
    <div className='popup'>
        <i className="fa-solid fa-circle-exclamation warning"></i> <br /> <br />
        <p style={{fontSize: 20, fontWeight: 500}}>Delete blog post</p>
        <div className="paragraph">
            Are you sure you want to delete this post? This action cannot be undone.
        </div>
        <br />
        <div className="group-button">
            <button className="button-cancel">Cancel</button>
            <button className="button-delete">Delete</button>
        </div>
    </div>
  )
}
