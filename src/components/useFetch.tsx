import { useState, useEffect } from "react";

// The generic type T will be used for the data state
const useFetch = <T extends unknown>(url: string): { data: T | null, isPending: boolean, error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortCon = new AbortController();
  
        setTimeout(() => {
            fetch(url, { signal: abortCon.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data as T); // Cast the data to type T
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                });
        }, 1000);

        return () => abortCon.abort();
    }, [url]); // Depend on url to re-fetch if it changes

    return { data, isPending, error };
}

export default useFetch;
