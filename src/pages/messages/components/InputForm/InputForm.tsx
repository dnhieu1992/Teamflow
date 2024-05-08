import './input-form.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCamera,
  faFile,
  faPaperPlane,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'

const InputForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {}
  return (
    <form onSubmit={onSubmit} className="input-form">
      <textarea rows={3} />
      <div className="input-form__actions">
        <FontAwesomeIcon icon={faCamera} />
        <FontAwesomeIcon icon={faVideo} />
        <FontAwesomeIcon icon={faFile} />
        <button className="send-btn">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  )
}

export default InputForm
