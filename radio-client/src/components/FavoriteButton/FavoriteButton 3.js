import React from 'react';
import favoriteButton from './favoriteButton.jpg';

favoriteButton = () => {
    return(
        <div>
            <img src={favoriteButton} alt="Heart icon that will mark current radio station as a favorite" />
        </div>
    )
}

export default favoriteButton