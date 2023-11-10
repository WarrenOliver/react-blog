import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCon = new AbortController();
  
        setTimeout(() => {
            fetch(url, { signal: abortCon.signal })
          .then((res) => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          // error handling
          .catch(err => {
            if (err.name === "AbortError") {
              console.log("fetch aborted")
            } else {
              setError(err.message);
              setData(null);
              setIsPending(false);
            }
            
          })
        }, 1000);
        return () => abortCon.abort();
      }, []);


    return { data, isPending, error }
}

export default useFetch;