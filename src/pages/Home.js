import React, { useState } from "react";
import Popup from "../pages/popup/Popup";

function Home() {
  const [team, setTeamName] = useState("");
  const [categoy, setCategory] = useState("");
  const [mEmail, setMEmail] = useState("");
  const [memberArray, setMemberArray] = useState(null);

  const addToArray = () => {
    let obj = {
      team: team,
      categoy: categoy,
      mEmail: mEmail,
    };
    console.log(memberArray);
    setMemberArray((memberArray) =>
      memberArray ? [obj, ...memberArray] : [obj]
    );
  };

  return (
    <div>

      {memberArray &&
        memberArray.length > 0 &&
        memberArray.map((val, ind) => (
          <div key={ind}>
            <div> <span className="spanName">TeamName:</span> {val.team}</div>
            <div><span  className="spanName">Category:</span> {val.categoy}</div>
            <div><span  className="spanName">Members:</span> {val.mEmail}</div>
          </div>
        ))}
      <Popup
        setTeamName={setTeamName}
        setCategory={setCategory}
        setMEmail={setMEmail}
        addToArray={addToArray}
      />
    </div>
  );
}

export default Home;
