import React from "react";
// import Typist from "react-typist";
// import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function About() {
  //   const pageTransition = {
  //     initial: {
  //       opacity: 0,
  //       y: -50,
  //     },
  //     animate: {
  //       opacity: 1,
  //       y: 0,
  //     },
  //     exit: {
  //       opacity: 0,
  //       y: 50,
  //     },
  //   };

  //   const contentTransition = {
  //     initial: {
  //       opacity: 0,
  //       y: -20,
  //     },
  //     animate: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         duration: 0.8,
  //         delay: 0.2,
  //       },
  //     },
  //   };

  //   return (
  //     <motion.div
  //       className="flex justify-center items-center bg-gray-100 min-h-screen"
  //       initial="initial"
  //       animate="animate"
  //       exit="exit"
  //       variants={pageTransition}
  //     >
  //       <motion.div
  //         className="w-full max-w-4xl bg-white rounded-lg shadow-lg px-10 py-12 text-gray-800"
  //         variants={contentTransition}
  //       >
  //         <h1 className="text-4xl font-bold mb-8 text-center leading-tight">About Learning Hub</h1>
  //         <p className="text-lg mb-8 leading-relaxed">
  //           Learning Hub is a web application designed to help students learn computer science concepts and technologies in an organized and efficient way.
  //         </p>
  //         <p className="text-lg mb-8 leading-relaxed">
  //         We have created comprehensive and interactive resources for subjects like Database Management Systems, Data Structures and Algorithms, Object-Oriented Programming, Cryptography and Network Security, and more.
  //         </p>

  //         <p className="text-lg mb-8 leading-relaxed">
  //           We believe that education should be accessible to everyone, and we hope to empower students to achieve their academic and professional goals through our platform.
  //         </p>
  //         <motion.div
  //           className="flex justify-center"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 0.6 }}
  //         >

  //         </motion.div>
  //       </motion.div>
  //     </motion.div>
  //   );
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800" h-full>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
              Welcome to <br />
              <span className="text-indigo-300">LearningHub</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg leading-6 text-indigo-200 sm:text-xl md:mt-5 md:max-w-3xl">
              An all-in-one platform for computer science students and
              enthusiasts.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg leading-6 text-indigo-200 sm:text-xl md:mt-5 md:max-w-3xl">
              We have created comprehensive and interactive resources for
              subjects like Database Management Systems, Data Structures and
              Algorithms, Object-Oriented Programming, Cryptography and Network
              Security, and more.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/subjects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
