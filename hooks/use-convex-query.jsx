
import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useConvexQuery = (query, ...args) => {
  const result = useQuery(query, ...args);
  const [data, setdata] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    if (result === undefined) {
      setIsLoading(true);
    } else {
      try {
        setdata(result);
        seterror(null);
      } catch (err) {
        seterror(err);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [result]);

  return { data, isLoading, error };
};

export const useConvexMutation = (mutation) => {
  const mutationFn = useMutation(mutation);

  const [data, setdata] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, seterror] = useState(null);
  const mutate = async(...args) => {
    setIsLoading(true);
    seterror(null);

    try {
      const reponse = await mutationFn(...args);
      setdata(reponse);
      return reponse;
    } catch (err) {
      seterror(err);
      toast.error(err.message);
     
    } finally {
      setIsLoading(false);
    }
  }
  return { data, isLoading, error, mutate };
}