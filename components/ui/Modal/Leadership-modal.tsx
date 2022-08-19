import React, { useState } from 'react'


const ModalData = () => {
  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(!modal)
  }

}

export default ModalData
