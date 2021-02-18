import * as React from 'react';
import CarList from '../components/CarList';

import { DB } from '../config/db';
import Head from 'next/head';

export const config = {amp: true}

function Home({result}) {
  return (
    <div className='container'>
      <Head>
        <title>Car List</title>
        <meta name="title" content="Car List - we have the car of list" />
        <meta name="description" content="Here we are showing the list of cars to display cars and price" />
        <meta name="author" content="Car List" />
        <meta property="og:title" content="Car List - we have the car of list" />
        <meta property="og:site_name" content="Car List" />
        <meta property="og:description" content="Here we are showing the list of cars to display cars and price." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Car List" />
        <meta name="twitter:title" content="Car List - we have the car of list" />
        <meta name="twitter:description" content="Here we are showing the list of cars to display cars and price." />
        <link rel="canonical" href="https://carlist-97672.web.app/" />
      </Head>
      <CarList cars={result} />
      <style jsx amp-custom>{`
        .container {
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: flex-start;
        }
      `}</style>
    </div> 
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  let db = await DB();

  let result = await new Promise((resolve, reject) => {
    db.collection('cars')
    .get()
    .then(snapshot => {
      let data = [];
      snapshot.forEach((doc) => {
        data.push(Object.assign(doc.data(), {
          id: doc.id,
          created_at: doc.data().created_at.toDate()
        }));
      })
      resolve(data)
    })
    .catch(error => {
      reject([])
    });
  }) 

  let data = JSON.stringify(result)
  // Pass data to the page via props
  return  {props: { result: JSON.parse(data) }};
}


export default Home;