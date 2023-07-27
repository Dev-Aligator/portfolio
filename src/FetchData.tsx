import { useState, useEffect } from "react";
import axios from "axios";

function FetchData<T>(many: boolean): T | T[] | undefined {
  const [data, setData] = useState<T | T[]>();
  const baseUrl = "http://localhost:8000";
  useEffect(() => {
    fetchData(); // Fetch data from the Django backend when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      var response;

      if (many) {
        response = await axios.get<T[]>(baseUrl);
      } else {
        response = await axios.get<T>(baseUrl);
      }
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return data;
}

export default FetchData;
