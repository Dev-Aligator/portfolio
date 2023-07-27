import { useEffect, useState } from "react";
import axios from "axios";

function FetchData<T>() {
  const [data, setData] = useState<T>(); // Use the generic type for 'data'

  useEffect(() => {
    fetchData(); // Fetch data from the Django backend when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<T>("http://localhost:8000");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return data;
}

export default FetchData;
