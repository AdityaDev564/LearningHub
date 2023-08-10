// import React, { useEffect, useState } from "react";
// import { auth, provider } from "./config";
// import { signInWithPopup, signOut } from "firebase/auth";
// // import LogoutPopup from "./LogoutPopup";

// const SignIn = () => {
//   const [user, setUser] = useState(null);
//   // const [showPopup, setShowPopup] = useState(false);

//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       // <LogoutPopup showPopup={showPopup} setShowPopup={setShowPopup} />;
//       setUser(data.user);
//       localStorage.setItem("email", data.user.email);
//     });
//   };

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setUser(null);
//       localStorage.removeItem("email");
//     });
//   };

//   useEffect(() => {
//     const email = localStorage.getItem("email");
//     if (email) {
//       setUser({ email });
//     }
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <img
//             src={user.photoURL}
//             alt="User"
//             style={{
//               width: "50px",
//               height: "50px",
//               borderRadius: "50%",
//               marginRight: "10px",
//             }}
//           />
//           <button
//             className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//           {/* <LogoutPopup showPopup={showPopup} setShowPopup={setShowPopup} /> */}
//         </div>
//       ) : (
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//           onClick={handleClick}
//         >
//           SignIn
//         </button>
//       )}
//     </div>
//   );
// };

// export default SignIn;

import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup, signOut } from "firebase/auth";

const LogoutPopup = ({ showPopup, setShowPopup, handleLogout }) => {
  const handleClick = () => {
    setShowPopup(false);
    handleLogout();
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center ${
        showPopup ? "" : "hidden"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white p-4 rounded-lg">
        <p className="text-gray-700 mb-4">Are you sure you want to log out?</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleClick}
          >
            Logout
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowPopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
      localStorage.setItem("email", data.user.email);
    });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      localStorage.removeItem("email");
    });
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUser({ email });
    }
  }, []);

  return (
    <div>
      {user ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={user.photoURL}
            alt="User"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setShowPopup(true)}
          >
            Logout
          </button>
          <LogoutPopup
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            handleLogout={handleLogout}
          />
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClick}
        >
          SignIn
        </button>
      )}
    </div>
  );
};

export default SignIn;
