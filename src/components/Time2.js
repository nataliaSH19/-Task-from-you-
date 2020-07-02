import React from "react";
import Moment from "react-moment";

function DateTime2(props) {
  const date = new Date();
  let minutes = props.length;
  return (
    <div className="deadline">
      <p>Deadline:</p>
      <Moment format="LLLL" add={{ minutes }}>
        {date}
        {/*!minutes ? "Put the text" : date*/}
      </Moment>
    </div>
  );
}
export default DateTime2;
