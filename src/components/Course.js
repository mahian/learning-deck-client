import React from 'react';

const Course = ({course}) => {
    console.log(course);
    const {title, image, price, duration} = course;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div>
                    <p>{price}</p>
                    <p>{duration}</p>
                </div>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default Course;