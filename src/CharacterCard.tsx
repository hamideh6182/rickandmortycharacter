import React from "react";

export type Character = {
    id:number,
    name : string,
    image :string
    status:string
}

export default function CharacterCard(props:Character){
    return(
    <div>
        <p>{props.name}</p>
        <p>{props.id}</p>
        <img src={props.image}></img>
        <p>{props.status}</p>

    </div>
    )
}