import { useState, useEffect } from "react";

import api from "@/api/axios";

type UseQueryRequest<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export default function useQuery<T = unknown>(
  endpoint: string
): UseQueryRequest<T> {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(endpoint);
        if (response.status !== 200) {
          setError("Something went wrong!");
        }
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError("Server Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);
  return { data, isLoading, error };
}
