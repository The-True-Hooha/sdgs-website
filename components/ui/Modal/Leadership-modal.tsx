import React, { useState } from 'react'

const ModalData = () => {
  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(!modal)
  }
return(
  <div>
    <div onClick={showModal} className='flex w-full h-full justify-center'>
      <div className={modal ? 'flex justify-center py-[500px] px-[500px]' : ''}>
        <div className={modal ? 'bg-blue-200 py-6 px-6 w-[55%]' : 'hidden left-[-100%]'}>
          <div onClick={showModal}>
            {/* this div handles the close event for the modal */}
            click here to close
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default ModalData
