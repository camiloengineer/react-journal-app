import React from 'react'
import { NotesAppBar } from '../journal/NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happens today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cruella-fotogramas-1617807238.jpg"
                        alt=""
                    />
                </div>

            </div>
        </div>
    )
}
