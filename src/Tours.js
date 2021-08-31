import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h3>Our Tours</h3>
        <div className="underline"></div>

        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
