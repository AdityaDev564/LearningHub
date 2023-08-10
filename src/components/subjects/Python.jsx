import React from "react";

const Python = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../Files/Programming in Python.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Programming in Python.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Python
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Programming With Python
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              This resource covers the fundamentals of Python Programming,
              including classes, objects, inheritance, polymorphism, and more.
            </p>
            <div className="mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.python.org/3/tutorial/index.html"
                className="inline-flex bg-indigo-500 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 active:bg-indigo-700 px-4 py-2 text-base shadow-md
          transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="max-w-md mx-auto">
              <img
                className="object-cover object-center rounded-lg shadow-lg"
                // src="https://pixabay.com/illustrations/cyber-security-technology-network-3374252/"
                src={require("../../images/python.jpg")}
                alt="Python"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="mt-8" />
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Python Programming Resources
          </h1>
          <div className="mt-6 sm:mt-8">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Introduction
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of Python
                      Programming, including syntax and data types.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.w3schools.com/python/python_intro.asp"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Object Oriented Programming
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of Object Oriented
                      Programming in Python.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/python-oops-concepts/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      GUI in Python
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of GUI in Python. It
                      also covers the basics of Tkinter and the different
                      widgets that are used in Tkinter to create GUI apps in
                      Python.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/python/python_gui_programming.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Some Video Resources
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Code With Harry:{""}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=gfDE2a7MKjA"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        Python Tutorial for Beginners
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      FreeCodeCamp:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=HGOBQPFzWKo"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        Intermediate Python Programming Course
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Tkinter Tutorial:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=YXPyB4XeYLA"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        FreeCodeCamp Tkinter Tutorial
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Some Practice Resources
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      PythonBasics:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerrank.com/domains/python"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        HackerRank
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Python Practice:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerearth.com/practice/python/getting-started/input-and-output/tutorial/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        HackerEarth
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Python Examples:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        GeeksForGeeks
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Previous Year Question Paper:
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <button
                        onClick={onButtonClick}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                      >
                        Download
                      </button>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Python;
