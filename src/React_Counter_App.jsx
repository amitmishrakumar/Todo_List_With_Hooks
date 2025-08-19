



import { useState } from "react";

export default function React_Counter_App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded mr-2">Increment</button>
      <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded mr-2">Decrement</button>
      <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
    </div>
  );
}
