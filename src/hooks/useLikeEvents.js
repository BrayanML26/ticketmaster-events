import { useState } from "react";

const useLikeEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState();

    return {
        isEventLiked,
    };
};

export default useLikeEvents;