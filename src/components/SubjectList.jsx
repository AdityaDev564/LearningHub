import React from "react";
import { Link } from "react-router-dom";
// import Card from "./Card";

function SubjectList() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Subjects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {/* <Card
            name="Cloud Computing"
            tag="Intermediate"
            content="this is a good course"
          /> */}
          <Link
            to="/subjects/c"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Introduction to C Programming
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                C is a general-purpose programming language created by Dennis
                Ritchie at the Bell Laboratories in 1972. It is a very popular
                language, despite being old. C is strongly associated with UNIX,
                as it was developed to write the UNIX operating system.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>

          <Link
            to="/subjects/dbms"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">DBMS</h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Database Management System (DBMS) is a software for storing and
                retrieving users' data by considering appropriate security
                measures.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>

          <Link
            to="/subjects/datastructure"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Data Structures and Algorithms
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Intermediate
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Data Structure is a way of organizing and storing data in a
                computer so that it can be accessed and modified efficiently.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>

          <Link
            to="/subjects/oops"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">OOPS</h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Intermediate
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Object-Oriented Programming (OOP) is a programming paradigm
                based on the concept of "objects", which can contain data and
                code: data in the form of fields (often known as attributes or
                properties), and code, in the form of procedures (often known as
                methods).
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>

          <Link
            to="/subjects/cns"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">CNS</h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Cryptography and Network Security (CNS) is the practice of
                securing networks and communications by using techniques such as
                encryption, authentication, and key management.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>

          <Link
            to="/subjects/python"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Programming using Python
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Python is a high-level, general-purpose programming language.
                Its design philosophy emphasizes code readability with the use
                of significant indentation via the off-side rule. Python is
                dynamically typed and garbage-collected.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/coa"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Computer Organisation and Architecture
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Intermediate
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                In this Computer Organization and Architecture Tutorial, you’ll
                learn all the basic to advanced concepts like pipelining,
                microprogrammed control, computer architecture, instruction
                design, and format.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/compiler-design"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Compiler Design
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Intermediate
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Compiler design principles provide an in-depth view of
                translation and optimization process. Compiler design covers
                basic translation mechanism and error detection & recovery. It
                includes lexical, syntax, and semantic analysis as front end,
                and code generation and optimization as back-end.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/toc"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Theory of Computation
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Automata theory (also known as Theory Of Computation) is a
                theoretical branch of Computer Science and Mathematics, which
                mainly deals with the logic of computation with respect to
                simple machines, referred to as automata.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>

          <Link
            to="/subjects/os"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Operating System
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Operating System lies in the category of system software. It
                basically manages all the resources of the computer. An
                operating system acts as an interface between the software and
                different parts of the computer or the computer hardware.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/soft-computing"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Soft Computing
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Intermediate
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Soft computing is the reverse of hard (conventional) computing.
                It refers to a group of computational techniques that are based
                on artificial intelligence (AI) and natural selection. It
                provides cost-effective solutions to the complex real-life
                problems for which hard computing solution does not exist.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/ai"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Artificial Intelligence
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Artificial Intelligence is a scientific discipline embracing
                several Data Science fields ranging from narrow AI to strong AI,
                including machine learning, deep learning, big data and data
                mining.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/ml"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Machine Learning
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Intermediate
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Machine Learning is the field of study that gives computers the
                capability to learn without being explicitly programmed.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
          <Link
            to="/subjects/software-engineering"
            className="bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full justify-between"
          >
            <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
              <h3 className="text-lg font-medium leading-6 text-white">
                Software Engineering
              </h3>
              <div className="bg-yellow-400 text-gray-800 rounded-full px-2 py-1 text-sm font-medium mr-2 self-start">
                Beginner
              </div>
            </div>
            <div className="mt-2 px-4 py-2 text-white text-sm flex-grow">
              <p>
                Software Engineering is an engineering branch related to the
                evolution of software product using well-defined scientific
                principles, techniques, and procedures. The result of software
                engineering is an effective and reliable software product.
              </p>
            </div>
            <div className="flex justify-end items-center bg-gray-900 py-2 px-4">
              <button className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubjectList;
