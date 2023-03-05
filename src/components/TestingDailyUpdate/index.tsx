import React, { useState } from "react";


const TestingDailyUpdate = () => {
  const [list, setList] = useState<string[]>([]);
  const [textValue, setTextValue] = useState<string>("");
  console.log({ list });
  return (
    <div>
      <input
        type="text"
        inputMode="numeric"
        value={textValue}
        pattern="[0-9]"
        onChange={(e) => setTextValue(e.target.value)}
        className="border-2 "
      />
      <button
        onClick={() => {
          setList([...list, textValue ]);
          setTextValue("");
        }}>
        add
      </button>
      <div>
        <ul>
            {
                list?.map((l, i) => (
                    <li key={i}>{l}</li>
                ))
            }
        </ul>
      </div>
      <p>The first element is {list?.at(0) ?? 'n/a'} and the last element is {list?.at(-1) ?? 'n/a'}</p>
      <div>
      
      </div>
    </div>
  );
};

export default TestingDailyUpdate;
