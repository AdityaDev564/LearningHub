import React from "react";

const C = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../Files/Programming with C.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ProgrammingWithC.pdf";
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
              C Programming
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Introduction to C Programming
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              This resource covers the fundamentals of C programming, including
              variables, data types, functions, and more.
            </p>
            <div className="mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tutorialspoint.com/cprogramming/index.htm"
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
                src={require("../../images/cProgramming.png")}
                alt="CNS"
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
            C Programming Resources
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
                      For those who are new to programming, this resource covers
                      the basics of programming and the principles of
                      programming. Some good resources are:
                      <p className="mt-1 text-sm leading-5 text-gray-500">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                          href="https://www.javatpoint.com/c-programming-language-tutorial"
                        >
                          javaTpoint
                        </a>
                      </p>
                      <p className="mt-1 text-sm leading-5 text-gray-500">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                          href="https://www.w3schools.com/c/"
                        >
                          w3schools
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Arrays
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers arrays, which are a common data
                      structure used in programming and computer science.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/array-data-structure/"
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
                      Strings
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers strings. Strings are actually
                      one-dimensional array of characters terminated by a null
                      character '\0'. Thus a null-terminated string contains the
                      characters that comprise the string followed by a null.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/cprogramming/c_strings.htm/"
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
                      Pointers
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Pointers in C are used to store the address of variables
                      or a memory location. This variable can be of any data
                      type i.e, int, char, function, array, or any other
                      pointer. Pointers are one of the core concepts of C
                      programming language that provides low-level memory access
                      and facilitates dynamic memory allocation.
                    </p>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/cprogramming/c_strings.htm/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                        href="https://www.youtube.com/watch?v=Z_0xXmOgYtY"
                      >
                        Video Tutorial
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      File IO
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      A file represents a sequence of bytes, regardless of it
                      being a text file or a binary file. C programming language
                      provides access on high level functions as well as low
                      level (OS level) calls to handle file on your storage
                      devices.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/cprogramming/c_file_io.htm"
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
                      Some Video Courses
                    </h3>
                    {/* <p className="text-base leading-6 text-gray-500">
                      A file represents a sequence of bytes, regardless of it
                      being a text file or a binary file. C programming language
                      provides access on high level functions as well as low
                      level (OS level) calls to handle file on your storage
                      devices.
                    </p> */}
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      NPTEL :
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="youtube.com/playlist?list=PLJ5C_6qdAvBFzL9su5J-FX8x80BMhkPy1"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-1"
                      >
                        Problem solving through Programming In C
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Code With Harry :
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=ZSPZob_1TOk"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-1"
                      >
                        C Language Tutorial For Beginners In Hindi (With Notes)
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Resources for Practice:
                    </h3>
                    {/* <p className="text-base leading-6 text-gray-500">
                      A file represents a sequence of bytes, regardless of it
                      being a text file or a binary file. C programming language
                      provides access on high level functions as well as low
                      level (OS level) calls to handle file on your storage
                      devices.
                    </p> */}
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      HackerRank :
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerrank.com/domains/c"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-1"
                      >
                        C Practice
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      HackerEarth Practice :
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-1"
                      >
                        Basic Programming
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      GeeksForGeeks :
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/c-programming-examples/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-1"
                      >
                        C Programming Examples
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
                    {/* <p className="text-base leading-6 text-gray-500">
                      This resource covers arrays, which are a common data
                      structure used in programming and computer science.
                    </p> */}
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {/* <a
                        onClick={onButtonClick}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://kalexamhai.github.io/static/media/Programming%20with%20C.55207e71.pdf"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Download
                      </a> */}
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

export default C;
