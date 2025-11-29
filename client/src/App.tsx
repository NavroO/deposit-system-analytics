import { useEffect, useState } from "react";
import "./App.css";

type Deposit = {
  eventId: number;
  locationId: number;
  itemSku: string;
  quantity: number;
  depositTime: string;
};

function App() {
  const [data, setData] = useState<Deposit>();

  async function getData() {
    const url = "http://localhost:8080/deposit";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <p>Event ID: {data.eventId}</p>
      <p>Location ID: {data.locationId}</p>
      <p>Item SKU: {data.itemSku}</p>
      <p>Quantity: {data.quantity}</p>
      <p>Deposit Time: {new Date(data.depositTime).toLocaleString()}</p>
    </div>
  );
}

export default App;
