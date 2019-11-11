import React, {Component} from 'react';

import './CharacterSheet.scss';

class CharacterSheet extends Component{
    constructor(props){
        super(props)

        console.log('Character sheet props', props)
    }

    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}
export default CharacterSheet;