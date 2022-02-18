import React from "react";
import background1 from "../images/defaultAvatar.png";
import Profile from "./Profile";

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
       return (
       <>
         <h2>Adalabers</h2>
         <Profile image= {this.props.image}/>
      </>
    );
  }
}

export default PreviewCard;