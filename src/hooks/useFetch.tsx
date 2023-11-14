import { useEffect, useRef, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit | undefined
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const constroller = new AbortController();
    const { signal } = constroller;

    async function fetchData() {
      try {
        const response = await fetch(url, { ...optionsRef.current });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        if (!signal.aborted) {
          const responseData = (await response.json()) as T;
          setData(responseData);
        }
      } catch (e) {
        if (!signal.aborted && e instanceof Error) setError(e.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    fetchData();

    return () => {
      constroller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
