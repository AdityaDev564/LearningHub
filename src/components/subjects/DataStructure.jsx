import React from "react";

function DataStructure() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              DSA
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Data Structures & Algorithms
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              This resource covers the fundamentals of data structures and
              algorithms, including arrays, linked lists, stacks, queues, trees,
              graphs, and more.
            </p>
            <div className="mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/"
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
                src={require("../../images/data-structure.jpeg")}
                alt="DSA"
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
            DSA Resources
          </h1>
          <div className="mt-6 sm:mt-8">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Complexity Analysis
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers complexity analysis, which is a way
                      to analyze the efficiency of an algorithm.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://betterprogramming.pub/complexity-analysis-of-an-algorithm-2268e19b29ef"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                    <p className="text-base leading-6 text-gray-500">
                      A video to refer on complexity analysis:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                        href="https://www.youtube.com/watch?v=FPu9Uld7W-E"
                      >
                        Striver's Complexity Analysis Video
                      </a>
                    </p>
                    <p className="text-base leading-6 text-gray-500">
                      Another more detailed video to refer on complexity
                      analysis:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                        href="https://www.youtube.com/watch?v=mV3wrLBbuuE"
                      >
                        Time and Space Complexity COMPLETE Tutorial - What is
                        Big O?
                      </a>
                    </p>
                    <p className="text-base leading-6 text-gray-500">
                      Complexity Tutorial:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                        href="https://www.codingninjas.com/codestudio/guided-paths/data-structures-algorithms/content/318446/offering/4414010"
                      >
                        Coding Ninjas
                      </a>
                    </p>
                    <p className="text-base leading-6 text-gray-500">
                      Complexity Practice:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                        href="https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/"
                      >
                        HackerEarth
                      </a>
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
                      This resource covers arrays, which are a fundamental data
                      structure in computer science.
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
                    <p className="text-base leading-6 text-gray-500">
                      Another video resource on arrays:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                        href="https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB"
                      >
                        Striver's Array Playlist
                      </a>
                    </p>
                    <p className="text-base leading-6 text-gray-500">
                      Array Practice Questions:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                        href="https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/"
                      >
                        GFG Array top 50 questions for interview
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
                      This resource covers strings, which are a fundamental data
                      structure in computer science.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/string-data-structure/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      A video to refer on string:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=Wdjr6uoZ0e0"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        CodeHelp LoveBabbar
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      String Practice:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://practice.geeksforgeeks.org/explore?page=14&category[]=Strings&sortBy=submissions"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        GFG Strings Practice Questions
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://practice.geeksforgeeks.org/explore?page=14&category[]=Strings&sortBy=submissions"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-8"
                      >
                        HackerRank Strings Practice Questions
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/strings-1/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-8"
                      >
                        HackerEarth Strings Practice Questions
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Searching & Sorting
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers searching and sorting, which are
                      fundamental algorithms
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="geeksforgeeks.org/searching-algorithms/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        Searching Algorithms
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/sorting-algorithms/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        Sorting Algorithms
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Linear Search Practice:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        HackerEarth
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Binary Search Practice:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.interviewbit.com/courses/programming/binary-search/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        InterviewBit Binary Search
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-8"
                      >
                        HackerEarth Binary Search Practice Questions
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://practice.geeksforgeeks.org/explore?page=1&category[]=Binary%20Search&sortBy=submissions"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-8"
                      >
                        GFG Binary Search Practice Questions
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Sorting Practice:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.codechef.com/practice/tags/sorting"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        CodeChef Sorting Practice
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Recursion
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers recursion, which is a fundamental and
                      important concept in programming and computer science
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Video Playlist on Recursion:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Striver's Recursion Playlist
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Practice Questions on Recursion:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/recursion-practice-problems-solutions/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        GFG Recursion Practice Questions
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
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/data-structures/linked-list/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Video Playlist on Linked Lists:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTr54_TH_NK4ibFojS4mmQA6"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        LoveBabbar
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Practice Questions on Linked Lists:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=linked-lists"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        HackerRank
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Stacks
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers stacks, which are a common data
                      structure used in programming and computer science.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/stack-data-structure/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Video Playlist on Stacks:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/playlist?list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Aditya Verma Stack Playlist
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Practice Questions on Stacks:
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/practice-problems/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        HackerEarth
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

export default DataStructure;
