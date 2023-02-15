import React from 'react';
import CharacterCard, {Character} from "./CharacterCard";

type Props = {
    characters : Character[]
}

export default function Gallery(props: Props) {
     const characterKarten = props.characters.map(value => {
        return <CharacterCard id={value.id} name={value.name} image={value.image} status={value.status}/>

    })
    return <div>{characterKarten}</div>
}


