import React from 'react'

const TextArea = ({ text, handleText, inputBox }) => {
  return (
    <textarea
      className='my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
      ref={inputBox}
      onChange={handleText}
      value={text}
      rows='4'
    />
  )
}

export default TextArea
