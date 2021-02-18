import * as React from 'react';
import { DB } from '../../config/db';

export const config = {amp: true}

function Car({data}) {
  return (
    <div className="container">
      <div className="card-info">
        <div className="image-container">
          <div>
            <amp-img
              alt="A view of the sea"
              src={data.imageUrl[0]}
              width="100"
              height="100"
              layout="responsive"
            ></amp-img>
          </div>
          <div className="other-images">
            <amp-img
              alt="A view of the sea"
              src={data.imageUrl[1]}
              width="100"
              height="100"
              
            ></amp-img>
              <amp-img
              alt="A view of the sea"
              src={data.imageUrl[2]}
              width="100"
              height="100"
            ></amp-img>
          </div>
        </div>
        <div className="details-container">
          <div className="model-details">
            <h4>{data.title}</h4>
            <p>{data.price}</p>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-self: center;
          justify-content: flex-start; 
          margin: 0px 30px;
          padding: 10px;
        }

        .card-info {
          display: flex;
          flex-direction: column;
        }

        .image-container {
          display: flex;
          flex-direction: column;
        }
        .other-images {
          display: flex;
          flex-direction: row;
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
      console.log(snapshot.data());
      let data =Object.assign(snapshot.data(), {
        id: snapshot.id,
        created_at: snapshot.data().created_at.toDate()
      })

      resolve(data);
    })
    .catch(error => {
      reject({})
    })
  });

  let data = JSON.stringify(result)

  return {props: { data: JSON.parse(data)}}
}

export default Car;
