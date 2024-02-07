import { useState } from "react";

const UseInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  return [value, handleChange];
};

const MyComponent = () => {
  const [name, handleNameChange] = UseInputState("");
  const [email, handleEmailChange] = UseInputState("");
  const [password, handlePasswordChange] = UseInputState("");

  console.count("Form");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 p-4 m-10 bg-gray-100 rounded'
    >
      <h1 className=' text-gray-700 font-bold text-3xl py-4 text-center'>
        Signup{" "}
      </h1>
      <input
        className='bg-gray-300 py-2 px-4 border border-gray-600 w-full rounded-lg'
        type='text'
        value={name}
        onChange={handleNameChange}
      />
      <input
        className='bg-gray-300 py-2 px-4 border border-gray-600 w-full rounded-lg'
        type='email'
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className='bg-gray-300 py-2 px-4 border border-gray-600 w-full rounded-lg'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        type='submit'
        className='py-2 px-5 border font-semibold bg-black text-white rounded-lg'
      >
        submit
      </button>
    </form>
  );
};

export default MyComponent;
