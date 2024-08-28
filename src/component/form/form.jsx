import './form.css';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';  

const Form = () => {
    const [form, setForm] = useState({
        username: '',
        revieww: '',
        rating: ''
    });

    const [reviews, setReviews] = useState([]);

    const handlechange = (e) => {
        console.log(e.target.value);

        let name = e.target.name;
        let value = e.target.value;

        setForm({...form, [name]: value});
        
    }

    const handleRatingChange = (newRating) => {
        setForm({ ...form, rating: newRating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.username.trim() && form.revieww.trim() && form.rating) {
            setReviews([...reviews, form]);
            setForm({
                username: '',
                revieww: '',
                rating: 1
            });
        } 
    };

    return(
        <div className="form">
            <h1>Display Application</h1>
            <form onSubmit={handleSubmit}>
            <div className='rat'>
                <StarRating rating={form.rating} setRating={handleRatingChange} />
            </div>
                <label>UserName : </label><br />
                <input type="text" placeholder='Enter your name' name='username' value={form.username} onChange={handlechange} required/><br />
                <label>Review : </label><br />
                <textarea name="revieww" cols="30" rows="5" placeholder="Your opinion..." value={form.revieww} onChange={handlechange} required></textarea><br />
                <button type='submit' className='btn'>Submit</button>
            </form>
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div className="review" key={index}>
                        <p>UserName : {review.username}</p>
                        <p>Review : {review.revieww}</p>
                        <p>Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Form;