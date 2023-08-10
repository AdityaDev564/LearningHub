import React from "react";

function CNS() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              CNS
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Cryptography and Network Security
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              This resource covers the fundamentals of cryptography and network
              security, including encryption, decryption, authentication,
              digital signatures, and more.
            </p>
            <div className="mt-6">
              <a
                href="https://www.geeksforgeeks.org/cryptography-introduction/"
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
                src={require("../../images/cns.jpg.webp")}
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
            CNS Resources
          </h1>
          <div className="mt-6 sm:mt-8">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Arrays
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers arrays, which are a fundamental data
                      structure in computer science.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
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
                      Linked Lists
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers linked lists, which are a common data
                      structure used in programming and computer science.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        href="https://www.geeksforgeeks.org/data-structures/linked-list/"
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
                      Trees
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers trees, which are a hierarchical data
                      structure commonly used in computer science.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        href="https://www.geeksforgeeks.org/binary-tree-data-structure/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
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
}

export default CNS;
