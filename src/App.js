// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SubjectList from "./components/SubjectList.jsx";
import DBMS from "./components/subjects/DBMS";
import DataStructure from "./components/subjects/DataStructure";
import OOPS from "./components/subjects/OOPS";
import CNS from "./components/subjects/CNS";
import Home from "./components/Home.jsx";
import C from "./components/subjects/C";
import Python from "./components/subjects/Python.jsx";
import OS from "./components/subjects/OS.jsx";
import AI from "./components/subjects/AI.jsx";
import ML from "./components/subjects/ML.jsx";
import CompilerDesign from "./components/subjects/CompilerDesign.jsx";
import TOC from "./components/subjects/TOC.jsx";
import COA from "./components/subjects/COA.jsx";
import SoftComputing from "./components/subjects/SoftComputing.jsx";
import SoftwareEngineering from "./components/subjects/SoftwareEngineering.jsx";
import ContactForm from "./components/contactForm.jsx";
import SignIn from "./components/googleSignIn/SignIn.jsx";
// import SubjectList from "./SubjectList";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <h1 className="text-4xl font-bold text-gray-800">
                      Learning<span className="text-blue-500">Hub</span>
                    </h1>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium mt-4 "
                    >
                      Home
                    </Link>
                    <Link
                      to="/subjects"
                      className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium mt-4"
                    >
                      Subjects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <SignIn className="mr-8" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/contactForm" element={<ContactForm />} />

          {/* <Route path="/signIn" element={<SignIn />} /> */}

          <Route path="/subjects" element={<SubjectList />} />

          <Route path="/subjects/datastructure" element={<DataStructure />} />

          <Route path="/subjects/oops" element={<OOPS />} />

          <Route path="/subjects/cns" element={<CNS />} />

          <Route path="/subjects/dbms" element={<DBMS />} />

          <Route path="/subjects/c" element={<C />} />

          <Route path="/subjects/python" element={<Python />} />

          <Route path="/subjects/os" element={<OS />} />

          <Route path="/subjects/ai" element={<AI />} />

          <Route path="/subjects/ml" element={<ML />} />

          <Route
            path="/subjects/compiler-design"
            element={<CompilerDesign />}
          />

          <Route path="/subjects/toc" element={<TOC />} />

          <Route path="/subjects/coa" element={<COA />} />

          <Route path="/subjects/soft-computing" element={<SoftComputing />} />

          <Route
            path="/subjects/software-engineering"
            element={<SoftwareEngineering />}
          />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
