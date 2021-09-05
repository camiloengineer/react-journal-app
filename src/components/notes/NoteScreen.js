import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from '../journal/NotesAppBar'

export const NoteScreen = () => {
    
    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm( note );
    
    const activeId = useRef( note.id );
    const { body, title } = formValues;

    useEffect(() => {
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );
        
    }, [formValues, dispatch])


    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea 
                    placeholder="What happens today"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                >
                </textarea>

                {
                    ( note.url ) 
                    &&
                   ( 
                        <div className="notes__image">
                            <img 
                                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cruella-fotogramas-1617807238.jpg"
                                alt=""
                            />
                        </div>
                    )
                }

            </div>
        </div>
    )
}
