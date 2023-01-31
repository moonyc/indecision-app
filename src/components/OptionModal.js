import React from 'react'
import Modal from 'react-modal'

// implicit return
const OptionModal = (props) => ( 
    <Modal
    //modal requires two props in order to work
    // to hide or show the modal: don't use statics, access the props
    isOpen={!!props.selectedOption} // !! it converts a string over to true and undefined over to false
    // for accesibility 
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS= {200}// the amount of time youu want to take before completely ripping it out of the dom
    className='modal' // override the default
    >
        <h3 className='modal-title'>
            Selected Option
        </h3>
        {props.selectedOption && <p className='modal-body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
 )
   


export default OptionModal