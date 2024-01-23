import { useState } from "react";

export default function PreservingChallange1() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState("");
  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form text={text} setText={setText} />
      {showHint ? (
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      ) : (
        <button
          onClick={() => {
            setShowHint(true);
          }}
        >
          Show hint
        </button>
      )}
    </div>
  );
}

function Form({ text, setText }) {
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
