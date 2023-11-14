import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div className="App">
        <h1>This will be the nav menu</h1>

        <Routes>
          <Route path="/" element={<p>This will be the HOMEPAGE</p>} />
          <Route path="/projects" element={<p>This will be the PROJECTS page</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
