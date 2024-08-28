import React from 'react';

const StarRating = ({ rating, setRating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} style={{ display: "none" }} />
                        <span className="star"
                         style={{
                                color: ratingValue <= rating ? "#ffc107" : "#bbbfb8",
                                fontSize: '3rem',
                                cursor: 'pointer',
                                padding: '6px',
                            }}
                        >&#9733;</span>
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
