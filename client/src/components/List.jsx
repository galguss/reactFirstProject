import React from 'react'
import Item from "./Item"

 function List(props){
    let rows =[];
    props.users.map((repo, index) => rows.push(<Item key = {index} repo = {repo}/>));

    return(
        <div className='list-group'>
            {rows}
        </div>
    )
}

export default List;