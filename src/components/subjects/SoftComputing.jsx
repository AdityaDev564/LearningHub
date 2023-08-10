import React from "react";

const SoftComputing = () => {
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("../../Files/Operating System.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "Operating System.pdf";
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
              SC
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Soft Computing
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Soft computing is a branch of computer science that deals with a
              family of methods that imitate human intelligence. Soft computing
              is a new, emerging discipline rooted in a group of technologies
              that aim to exploit the tolerance for imprecision and uncertainty
              in achieving solutions to complex problems. The principal
              constituents of soft computing are fuzzy logic, neurocomputing,
              genetic algorithms, and probabilistic reasoning. The emerging
              field of soft computing is likely to play a role in science and
              engineering in the future.
            </p>
            <div className="mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Soft_computing"
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
                src={require("../../images/sc.png")}
                alt="AI"
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
            Soft Computing Resources
          </h1>
          <div className="mt-6 sm:mt-8">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Artificial Neural Networks
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Introduction – Fundamental concept – Evolution of Neural
                      Networks – Basic Models of Artificial Neural Networks –
                      Important Terminologies of ANNs – McCulloch-Pitts Neuron –
                      Linear Separability – Hebb Network. Supervised Learning
                      Network: Perceptron Networks – Adaline – Multiple Adaptive
                      Linear Neurons – Back-Propagation Network – Radial Basis
                      Function Network.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/artificial_neural_network/artificial_neural_network_basic_concepts.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Artificial Neural Network &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/implementing-models-of-artificial-neural-network/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        MP Neuron, Perceptron, Adaline, Linear Separatibility
                        &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/hebbian-learning-rule-with-implementation-of-and-gate/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Hebb Network &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/adaline-and-madaline-network/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Adaline & Madaline &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/backpropagation-in-data-mining/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Back Propagation &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Fuzzy Set and Logic
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Fuzzy Arithmetic and Fuzzy Measures: Fuzzy Rule Base and
                      Approximate Reasoning: Truth values and Tables in Fuzzy
                      logic – Fuzzy Propositions – Formation of Rules –
                      Decomposition and Aggregation of rules – Fuzzy Reasoning –
                      Fuzzy Inference Systems (FIS) – Fuzzy Decision Making –
                      Fuzzy Logic Control Systems.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/fuzzy_logic/fuzzy_logic_introduction.htm"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Learn More &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Genetic Algorithms
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      – Basic Operators and Terminologies in GAs – Traditional
                      Algorithm vs. Genetic Algorithm – Simple GA – General
                      Genetic Algorithm – The Scheme Theorem – Classification of
                      Genetic Algorithm – Holland Classifier Systems – Genetic
                      Programming. Applications of Soft Computing: A Fusion
                      Approach of Multispectral Images with SAR Image for Flood
                      Area Analysis – Optimization of Travelling Salesman
                      Problem using Genetic Algorithm Approach – Genetic
                      Algorithm based Internet Search Technique – Soft Computing
                      based Hybrid Fuzzy Controllers – Soft Computing based
                      Rocket Engine – Control.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/genetic-algorithms/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Read More &rarr;
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
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/playlist?list=PLJ5C_6qdAvBFqAYS0P9INAogIMklG8E-9"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        NPTEL: Introduction to Soft Computing
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

export default SoftComputing;
