import React from "react";

const CompilerDesign = () => {
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("../../Files/Computer Org & Arch.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "Computer Organization and Architecture.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              CD
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Compiler Design
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              This resource covers the fundamentals of Compiler Design,
              including lexical analysis, parsing, syntax-directed translation,
              runtime environments, and code generation.
            </p>
            <div className="mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.geeksforgeeks.org/introduction-of-compiler-design/"
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
                src={require("../../images/compilerDesign.jpg")}
                alt="COA"
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
            Compiler Design Resources
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
                      This resource covers the fundamentals of Compiler Design,
                      including lexical analysis, parsing, syntax-directed
                      translation, runtime environments, and code generation.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/compiler-introduction"
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
                      Basic Parsing Techniques
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of basic parsing and
                      parsing techniques, including top-down parsing, bottom-up
                      parsing, and more.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://byjus.com/gate/parsing-in-compiler-design/"
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
                      Top Down Parsing, Bottom Up Parsing
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of top-down parsing
                      and bottom-up parsing, including the differences between
                      the two and how to implement them.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/compiler_design/compiler_design_top_down_parser.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Top Down Parsing &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/compiler_design/compiler_design_bottom_up_parser.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Bottom up Parsing &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Syntax Directed Translation
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of syntax-directed
                      translation.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/compiler_design/compiler_design_bottom_up_parser.htm"
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
                      Semantic Analysis and Type Checking
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of semantic analysis
                      and type checking, including the differences between the
                      two and how to implement them.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/compiler_design/compiler_design_semantic_analysis.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Semantic Analysis &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/type-checking-in-compiler-design/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Type Checking &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Symbol Table Handling Techcniques
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of symbol table and
                      its handling techniques.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/symbol-table"
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
                      Run Time Storage Organization and Environment
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of run time storage
                      organization and environment, including the differences
                      between the two and how to implement them.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/storage-organization#:~:text=Runtime%20storage%20comes%20into%20blocks,gives%20the%20first%20byte%20address."
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
                      Code Optimization
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of code optimization
                      and its techniques.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/code-optimization-in-compiler-design/"
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
                      Code Generation
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      This resource covers the fundamentals of code generation
                      and its techniques.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/compiler_design/compiler_design_code_generation.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn more &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              {/* <li className="py-4">
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompilerDesign;
