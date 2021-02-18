import * as React from 'react';
import Link from 'next/link'

import { DB } from '../../config/db';
import CarImages from "../../components/CarList/CarImages";
import Head from 'next/head';

export const config = {amp: true}

function Car({car}) {
  if (!car) {
    return (
      <>
        <h4>Oops no car to display this address! ;)</h4>
        <style jsx>{`
          h4 {
            text-align: center
          }
        `}</style>
      </>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Car {car.title}</title>
        <meta name="title" content={`car-${car.title}`} />
        <meta name="description" content={car.description} />
        <meta name="author" content="Car List" />
        <meta property="og:title" content={`car-${car.title}`} />
        <meta property="og:site_name" content="Car List" />
        <meta property="og:description" content={car.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={car.imageUrl ? car.imageUrl[0] : "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Car List" />
        <meta name="twitter:title" content={`car-${car.title}`} />
        <meta name="twitter:description" content={car.description} />
        <link rel="canonical" href="https://carlist-97672.web.app/" />
      </Head>
      <div className="card-info">
        <CarImages images={car.imageUrl} />
        <div className="card-description">
          <div className="car-details">
            <h4 className="car">Brand: {car.title}</h4>
            <p className="car">Price ${car.price}</p>
          </div>
          <p className="car-description">{car.description}</p>
          <p className="car-post-date">Posted on: {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(car.created_at))}</p>
          <Link href={`/`}><a className="details-button">Back</a></Link>
        </div>
      </div>
      <style jsx amp-custom>{`
        .container {
          display: flex;
          flex-direction: row;
          align-self: center;
          justify-content: flex-start; 
          margin: 0px 30px;
          padding: 70px 10px 10px 10px;
        }

        .card-info {
          background-color: #fff;
          box-shadow: 3px 3px 5px 6px #cccccc40;
          margin: 10px;
          border-radius: 8px;
          overflow: hidden;
          width: 800px;
          padding 10px;
        }

        .card-description {
          display: flex;
          flex-direction: column;
          padding: 0px 10px 0px 10px;
          margin: 0px
        }

        .car-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .car-description {
          margin: 0;
        }

        .car-post-date {
          margin: 8px 0px 0px 0px;
          font-size: 12px;
          color: #ccc;
          font-style: italic;
        }

        .car {
          margin: 0px 0px 10px 0px;
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
    </div>
  )
}

export async function getServerSideProps({query}) {
  let db = await DB();
  let result = await new Promise((resolve, reject) => {
    db.collection('cars')
    .doc(query.id)
    .get()
    .then(snapshot => {
      let data =Object.assign(snapshot.data(), {
        id: snapshot.id,
        created_at: snapshot.data().created_at.toDate()
      })

      resolve(data);
    })
    .catch(error => {
      reject(null)
    })
  });

  let car = JSON.stringify(result)

  return {props: { car: JSON.parse(car)}}
}

export default Car;
