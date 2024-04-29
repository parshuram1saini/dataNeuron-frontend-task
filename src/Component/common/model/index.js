import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import "./modal.css"

function FormModel({ action, setIsModal, heading, title, description, handleChange, setData,submitText }) {
    return (
        <div className="modal-container">
            <div className='modal-wrapper'>
                <h2 className="heading">{heading}</h2>
                <div className='closeIcon' onClick={() => { setData((prev)=> prev); setIsModal(0) }}>
                    <IoIosCloseCircleOutline />
                </div>
                <div className="input-field">
                    <label htmlFor="title" className='required'>Title</label>
                    <input type="text" name="title" value={title} onChange={(e) => handleChange(e)} />
                </div>
                <div className="input-field">
                    <label htmlFor="Description" className='required'>Description</label>
                    <textarea rows={8} type="text" name="description" value={description} onChange={(e) => handleChange(e)} />
                </div>
                <button onClick={action} className="submit-btn">{submitText}</button>
            </div>
        </div>
    )
}

export default FormModel
