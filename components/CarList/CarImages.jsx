import * as React from 'react';

function CarImages({images}) {

  if (!images || images.length === 0) {
    return (
      <>
        <h4>Oops no Image for this car to display! ;)</h4>
        <style jsx>{`
          h4 {
            text-align: center
          }
        `}</style>
      </>
    )
  };

  return (
    <div className="image-list">
      {
        images.map((image, index) => {
          return (
            <div className="image-container" key={`key-${index}`}>
              <amp-img
                alt="A view of the sea"
                src={image}
                width="300"
                height="300"
              ></amp-img>
            </div>
          )
        })
      }
      <style jsx>{`
        .image-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 10px;
          display: flex;
          justify-content: center;
        }

        .image-container {
          padding: 10px;
          border-radius: 11px;
        }
      `}</style>
    </div>
  )
}

export default CarImages;
