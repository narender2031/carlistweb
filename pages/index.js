import * as React from 'react';
import CarList from '../components/CarList';

import { DB } from '../config/db';

export const config = {amp: true}

function Home({result}) {
  return (
    <div className='container'>
      <CarList cars={result} />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-self: center;
          justify-content: flex-start; 
          margin: 0px 30px;
          padding: 10px;
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