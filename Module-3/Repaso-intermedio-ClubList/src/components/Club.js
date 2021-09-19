import React from "react";

const Club = (props) => {
  const renderMembers = () => {
    //console.log(props.item.members);

    return props.item.members.map((member, index) => {
      return <li key={index}>{member}</li>;
    });
  };
  return (
    <>
      <article>
        <i className={`club__icon ${props.item.fa}`}></i>
        <h2 className="club__title">{props.item.name}</h2>
        <h4 className="members__title">Members:</h4>
        <ul>{renderMembers()}</ul>
      </article>
    </>
  );
};

export default Club;
