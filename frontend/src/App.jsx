import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Predict } from "./pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
