import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      <Link
        to="/subjects/c"
        className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
      >
        <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
          <h3 className="text-lg font-medium leading-6 text-white">
            {props.name}
          </h3>
          <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
            {props.tags}
          </div>
        </div>
        <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
          <p>{props.content}</p>
        </div>
        <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
          <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
