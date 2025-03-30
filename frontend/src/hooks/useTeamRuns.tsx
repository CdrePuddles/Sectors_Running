import { useState, useEffect } from 'react';
import axios from 'axios';

// Define types for our data structure
interface TeamData {
  km: number;
  color: string;
}

interface PlaceTeamData {
  [teamName: string]: TeamData;
}

interface TeamRunsData {
  [placeName: string]: PlaceTeamData;
}

/**
 * Custom hook to fetch team runs data using Axios
 * @param endpoint The API endpoint path (defaults to '/team-runs')
 * @param baseUrl Base URL for API (empty for same domain, or specify like 'http://localhost:3000')
 * @returns Object containing loading state, error state, and the fetched data
 */
const useTeamRuns = (
  endpoint: string = '/api/users/rundata',
  baseUrl: string = ''
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<TeamRunsData | null>(null);

  // Create axios instance with baseURL
  const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // 10 seconds timeout
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log(`Fetching data from: ${baseUrl}${endpoint}`);
      
      const response = await api.get<TeamRunsData>(endpoint);
      setData(response.data);
      
    } catch (err) {
      console.error('Error fetching team runs:', err);
      
      if (axios.isAxiosError(err)) {
        // Handle specific Axios errors with more context
        const errorMessage = err.response 
          ? `Server responded with status ${err.response.status}: ${err.response.statusText}`
          : err.message;
        setError(new Error(errorMessage));
      } else {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, baseUrl]);

  // Return data, state, and a refetch function
  return { 
    loading, 
    error, 
    data,
    refetch: fetchData
  };
};

export default useTeamRuns;