import React, { useState, useEffect } from "react";

//displays the current time with a constant update (not used in the task)
function DateTime(props) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>

      <p>{props.length}</p>
    </div>
  );
}
export default DateTime;
