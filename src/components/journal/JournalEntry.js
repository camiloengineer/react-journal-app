import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
            className="journal__entry-picture"
            style={{ 
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.panoramaweb.com.mx/u/fotografias/m/2021/5/24/f608x342-3886_33609_15.jpeg)'
             }}
            >
            </div>

             <div className="journal__entry-body">
                 <p className="journal__entry-title">
                     Un nuevo día
                 </p>
                 <p className="journal__entry-content">
                     Proident aliqua amet minim proident ex deserunt pariatur nulla consequat nisi aute.
                 </p>
             </div>

             <div className="journal__entry-date-box">
                 <span>Monday</span>
                <h4>28</h4>
             </div>

        </div>
    )
}
