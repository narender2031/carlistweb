import * as React from 'react';

import Link from 'next/link'

export default function CarListItem({car}) {
  if (!car) {
    return (
      <>
        <h4>We found no information for you! ;)</h4>
        <style jsx>{`
          h4 {
            text-align: center
          }
        `}</style>
      </>
    )
  };

  return (
    <>
      <div className="card">
        <amp-img
          alt={car.description}
          src={car.imageUrl[0]}
          width="70"
          height="40"
          layout="responsive"
        >
        </amp-img>
        <div className="card-description">
          <div className="car-details">
            <p>Brand: {car.title}</p>
            <p>Price ${car.price}</p>
          </div>
          <p className="car-description">{car.description}</p>
          <span>
            Posted on: 
            <amp-timeago
              layout="fixed"
              width="160"
              height="20"
              datetime={car.created_at}
              locale="en"
            >  
              <p className="car-post-date"> {car.created_at}</p>
            </amp-timeago>
          </span>
          
          <Link href={`/car/${encodeURIComponent(car.id)}?amp=1`}><a className="details-button">Details</a></Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: #fff;
          box-shadow: 3px 3px 5px 6px #cccccc40;
          margin: 10px;
          border-radius: 8px;
          overflow: hidden;
          width: 400px;
        }

        .card-description {
          display: flex;
          flex-direction: column;
          padding: 0px 10px 0px 10px;
          margin: 0px
        }

        .car-details {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .car-description {
          margin: 0;
        }

        amp-timeago {
          font-size: 12px;
          color: #ccc;
          font-style: italic;
          display: initial;
          margin: 0px 10px;
        }

        span {
          margin: 8px 0px 0px 0px;
          font-size: 12px;
          color: #ccc;
          font-style: italic;
        }

        .details-button {
          text-align: center;
          padding: 8px 20px 8px 20px;
          border: 1px solid #34495e;
          border-radius: 4px;
          text-decoration: none;
          align-self: center;
          margin: 10px;
          color: #34495e;
        }

        .details-button:hover {
          background-color: #34495e;
          color: #ffff;
        }

      `}</style>
    </>
  )
}