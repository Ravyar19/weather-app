import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityInputPage from "./pages/CityInputPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Routes>
            <Route path="/" element={<CityInputPage />} />
            <Route path="/details/:cityName" element={<DetailsPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
