import React, { useEffect, useState } from 'react'
// import data from '../data/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ({match, history }) => {
    let [note, setNote] = useState(null)
    let noteId = match.params.id

    useEffect(() =>{
        getNote()
    }, [noteId])


    let getNote = async () => {
        if(noteId === 'new') return
        let response = await fetch(`http://localhost:5000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let deleteNote = async () => {
        await fetch(`http://localhost:5000/notes/${noteId}`, {
            method  : "DELETE",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        history.push('/')
    }

    let createNote = async () => {
        await fetch(`http://localhost:5000/notes/`, {
            method  : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        await fetch(`http://localhost:5000/notes/${noteId}`, {
            method  : "PUT",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () => {
        if(noteId !== 'new' && !note.body){
            deleteNote()
        }else if(noteId !== 'new'){
            updateNote()
        }else if(noteId === 'new' && note.body != null){
            createNote()

        }

        updateNote()
        history.push('/')

    }

    //  console.log(noteId)
    // let note = data.find(note => note.id === Number(noteId))

  return (
    
    <div className='note'>

        <div className='note-header'>
            <h3>
                <Link to='/'>
                    <ArrowLeft onClick={handleSubmit}/>
                </Link>
                
            </h3> 

            {noteId !== 'new'? (
                    <button onClick={deleteNote}>Delete</button>
            ): (
                <button onClick={handleSubmit}>Done</button>
            )}
            
        </div>
        
        <textarea onChange={(e)=> {setNote({...note, 'body': e.target.value})} } value={note?.body}>

        </textarea>
        
    </div>
  )
}

export default NotePage