import React, { useState } from 'react'

import Input from './Input';
import List from './List';


function Container(){
    const [Repository, setRepository] = useState([]);
    return (
        <>
            <Input callbackRepo={setRepository}/> 
            <List users = {Repository} />
        </>
    )
}

export default Container;