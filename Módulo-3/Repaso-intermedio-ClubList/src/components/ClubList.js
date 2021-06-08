import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  const clubItems = props.data.map((item, index) => {
    return (
      <li key={index}>
        {/* <Club name={item.name} icon={item.fa} /> */}
        <Club item={item} /> {/*Le estoy pasando todo a Club.js */}
      </li>
    );
  });

  return <ul>{clubItems}</ul>;
};

export default ClubList;
