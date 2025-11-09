import React, { useState } from 'react';
import { fetchPropertyDetails } from './services/property';
import PropertyInformation from './components/PropertyInformation';
import Error from './components/Error';

const BASE_INPUT_CLASS = "p-3 border border-gray-300 rounded-md w-[600px]"
const ERROR_INPUT_CLASS = "p-3 border border-red-300 rounded-md w-[600px]"

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [hasError, setHasError] = useState(false);
  const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL;

  const handleSearch = async () => {
    try {

      const data = await fetchPropertyDetails(backendApiUrl, searchTerm);
      setApiResponse(data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setApiResponse({ error: 'Failed to fetch data' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Hometap Property Detail Search</h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter full address, including street, city, state, and zip"
          className={hasError ? ERROR_INPUT_CLASS : BASE_INPUT_CLASS}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {(apiResponse && !hasError) && (
        <PropertyInformation data={apiResponse} />
      )}
      {
        hasError && (
          <Error message={apiResponse} />
        )
      }
    </div>
  );
};

export default App;
