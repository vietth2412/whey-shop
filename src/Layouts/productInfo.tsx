/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MyData {
  id: number;
  name: string;
}

function MyComponent() {
  const [data, setData] = useState<MyData[]>([]);

  useEffect(() => {
    axios.get<MyData[]>('https://localhost:3001/products/1')
      .then(function (response: { data: MyData[]; }) {
        const responseData: MyData[] = response.data;
        setData(responseData);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
export default MyComponent;