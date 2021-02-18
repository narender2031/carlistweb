import * as React from 'react';

import Link from 'next/link'

export default function CarListItem({car}) {
  if (!car) return null;

  return (
    <>
      <div className="card">
        <amp-img
          alt="A view of the sea"
          src={car.imageUrl[0]}
          width="100"
          height="100"
          layout="responsive"
        >
        </amp-img>
        <div className="card-description">
          <div className="car-details">
            <h4>{car.title}</h4>
            <p>{car.price}</p>
          </div>
          <p>{car.description}</p>
          <Link href={`/car/${encodeURIComponent(car.id)}?amp=1`}>Details</Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: #fff;
          box-shadow: 3px 3px 5px 6px #ccc;
          margin: 10px;
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

        h4 {
          margin: 10px;
        }
      `}</style>
    </>
  )
}