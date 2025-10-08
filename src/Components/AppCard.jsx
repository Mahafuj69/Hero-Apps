import React from 'react';
import rating from "../assets/icon-ratings.png"
import download from "../assets/icon-downloads.png"
const AppCard = ({apps}) => {
   const {title, image, ratingAvg, downloads } = apps
    return (
        <div >
            <div className="card bg-base-70 border m-2 shadow-sm hover:scale-105 transition ease-in-out ">
                <figure className='h-48 overflow-hidden'>
                      <img className='w-full object-cover'src={image} alt="Shoes" />
                </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      
    </h2>
    <div className="card-actions justify-between">
      <div className="badge badge-outline gap-2 "> <img src={rating} alt="" className='h-5' /> {ratingAvg}</div>
      <div className="badge badge-outline gap-2 "> <img src={download} alt="" className='h-5' />{downloads}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppCard;