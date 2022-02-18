
import React, {useState } from "react";
import Form from './Form';
import PreviewCard from './PreviewCard';
function CardG(){

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [image, setImage] = useState( "");

    const updateAvatar = (image) => {
        setImage(image);
      };
    return (
    <>
        {/*<Header/>*/}
        <Form image= {image} updateAvatar={updateAvatar}/>
        <PreviewCard image= {image}/>  
        {/*<Footer/>*/}
    </>
    );
}

export default CardG;