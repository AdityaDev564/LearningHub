import React from "react";

const AI = () => {
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
              AI
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Artificial Intelligence
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              It is a branch of computer science by which we can create
              intelligent machines which can behave like a human, think like
              humans, and able to make decisions.
            </p>
            <div className="mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.javatpoint.com/artificial-intelligence-ai"
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
                src={require("../../images/ai.jpeg")}
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
          <h1 className="text-2xl font-semibold text-gray-900">AI Resources</h1>
          <div className="mt-6 sm:mt-8">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Introduction
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      AI History and applications. Overview of AI application
                      areas: game playing, automated reasoning and theorem
                      proving, expert systems, natural language understanding,
                      planning and robotics, machine learning and Alan Turing
                      Test.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/history-of-artificial-intelligence"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        AI History &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.geeksforgeeks.org/artificial-intelligence-an-introduction/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        AI Introduction &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      The Propositional and Predicate Logic
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Symbol and sentences, the semantics of the Propositional
                      Calculus & Predicate Calculus. Inference Rules and Theorem
                      Proving. Axioms, Literals, Horn clause & Clausal forms
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/propositional-logic-in-artificial-intelligence#:~:text=Propositional%20logic%20(PL)%20is%20the,in%20logical%20and%20mathematical%20form."
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Propositonal Logic &rarr;
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/predicate-logic#:~:text=Predicate%20Logic%20%2D%20Definition,or%20by%20quantifying%20the%20variable."
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                      >
                        Predicate Logic &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Reasoning
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Inductive, Deductive, Abductive and Default reasoning.
                      More examples on Resolution proof.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/reasoning-in-artificial-intelligence"
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
                      Problem Solving as Search
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Structures and strategies for state space search.
                      Algorithms for Heuristic search, Heuristic evaluation
                      functions.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.analyticsvidhya.com/blog/2021/10/an-introduction-to-problem-solving-using-search-algorithms-for-beginners/"
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
                      Knowldege Representation
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Knowledge representation Techniques; conceptual graphs;
                      structured representations; frames, scripts; issues in
                      knowledge representation: hierarchies, inheritance,
                      exceptions.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/knowledge-representation-in-ai"
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
                      Expert System
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Overview of expert system technology; rule-based expert
                      systems; Construction of ES. Components of an ES, The
                      explanation facility, Rule-based formation and forward and
                      backward chaining techniques for problem solving.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.javatpoint.com/expert-systems-in-artificial-intelligence"
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
                      Natural Language Processing
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      Introduction. Vocabulary and issues, How NLP programs
                      work, Natural Language application, NL Interfaces.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_natural_language_processing.htm"
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
                      Some Video Resources
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/playlist?list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        NPTEL: An Introduction to Artificial Intelligence
                      </a>
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out ml-2"
                      >
                        Gate Smashers: Artificial Intelligence
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

export default AI;
