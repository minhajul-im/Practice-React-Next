import { useEffect, useState, useRef } from "react";
function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return <input ref={ref} value={value} onChange={onChange} />;
}

export default function ChallengeTwo() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");
  const name = firstName + " " + lastName;
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} form
      </button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>
            Hello, <b> {name}</b>
          </p>
        </>
      )}
    </>
  );
}
