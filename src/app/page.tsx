import React from 'react'
import B1 from './components/Input'
import B2 from './components/Select'
import B4 from './components/FormRegister'
import B3 from './components/FormLogin'
import B5 from './components/Popup'
import B6 from './components/Navigation'
import B7 from './components/BaseButton'
import B8 from './components/Pagination'

export default function page() {
  return (
    <div>
      <B1/>
      <br />
      <B2/>
      <br />
      <B3/>
      <br />
      <B4/>
      <br />
      <B5/>
      <br />
      <B6/>
      <br />
      <B7 type='primary'>Primary</B7>
      <B7 type='danger'>Danger</B7>
      <B7 type='warning'>Warning</B7>
      <B7 type='success'>Success</B7>
      <br />
      <br />
      <B8/>
    </div>
  )
}
