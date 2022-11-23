import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = (props) => {

  let getTitle = (note) => {
    const title = props.note.body.split('\n')[0]
    if (title.length > 45 ){
      return title.slice(0,15) + "(......)"
    }

    return title
  }

  let getContent = () => {
    let title = getTitle(props.note)
    let content = props.note.body.replaceAll('\n', '')
    content = content.replaceAll(title, "")
    
    if(content.length > 15){
      return content.slice(0,45)
    }else {
      return content
    }
  }

    // can use {note} automatically then can access the note via {note.body}
  return (
    <div>
     
        <Link to={`/note/${props.note.id}`}>

            <div className='notes-list-item'>
            <h3>{getTitle(props)}</h3>
            <p><span>{getContent(props.note)}</span></p>
            </div>
            
            
            
            </Link>   
       
        
    </div>
  )
}

export default ListItem