import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainView from "./Views/MainView";
import TechnicalSpecification from "./Components/TechnicalSpecification";
// import TechnicalSpecification from "./TechnicalSpecification";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainView />} />
          <Route path="TechnicalSpecification" element={<TechnicalSpecification/>}  />
      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
