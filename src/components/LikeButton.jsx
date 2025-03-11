import React, {useState} from "react";

const LikeButton = () => {
    const [likes, setLikes] = useState(0);

    const handleLikes = () => {
        setLikes(likes + 1);
    }

    return(
        <div>
            <button className = "like-button" onClick={handleLikes}>
            👍 Gilla ({likes})</button>
        </div>
    )
};

export default LikeButton;