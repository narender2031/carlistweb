import * as React from 'react';

import CarListItem from './CarListItem';

function CarList({cars}) {

  if (!cars) return null;
 
  return (
    <>
      <div className="card-list">
        {
          cars.map(car => <CarListItem car={car} key={car.id}/>)
        }
      </div>
      <style jsx>{`
        .card-list {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-;
        }
      `}</style>
    </>
  )
}

export default CarList;
