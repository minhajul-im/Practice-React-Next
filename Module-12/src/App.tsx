import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='flex h-screen items-center justify-center'>
      <div>
        <h1 className='text-center text-3xl font-bold font-mono text-red-600'>
          Hello TypeScript{" "}
          <span className='bg-sky-600 p-3 rounded text-white'>{count}</span>
        </h1>
        <button
          className='py-2 px-4 font-semibold border bg-gray-600 text-white rounded-lg'
          onClick={() => setCount(count + 1)}
        >
          Counter
        </button>
      </div>
    </div>
  );
}
