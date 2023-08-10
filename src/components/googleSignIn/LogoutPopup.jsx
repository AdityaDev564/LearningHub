import React from "react";

function LogoutPopup(props) {
  return (
    <div
      className={`fixed inset-0 z-50 ${props.showPopup ? "" : "hidden"}`}
      onClick={() => props.setShowPopup(false)}
    >
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="fixed inset-y-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 max-w-lg w-full">
        <h2 className="text-lg font-medium mb-4">
          Are you sure you want to log out?
        </h2>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              props.setShowPopup(false);
              // Add your logout functionality here
            }}
          >
            Log out
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => props.setShowPopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPopup;
