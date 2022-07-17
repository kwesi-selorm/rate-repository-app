import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

function useRepositories() {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  function fetchRepositories() {
    if (loading) return null;
    if (error) return `Something went wrong: ${error}`;
    setRepositories(data.repositories);
  }

  useEffect(() => {
    fetchRepositories();
  }, [loading]); //Add 'loading' as a dependency so the data is refetched when it changes from true to false

  return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories;
