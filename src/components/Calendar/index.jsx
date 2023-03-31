import React, { useState } from 'react'

const MyCalendar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIframe = () => setIsVisible((prevIsVisible) => !prevIsVisible);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={toggleIframe}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isVisible ? 'Close' : 'Open'} My Iframe
      </button>
      {!isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <iframe
              title="My iframe"
              src="https://fantastical.app/lucas_padilha/pick-up-time-slot"
              className="w-full h-96 rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar
