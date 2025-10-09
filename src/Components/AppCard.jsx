import { Link } from 'react-router';
import rating from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
const AppCard = ({apps}) => {
  const { title, image, ratingAvg, downloads, id } = apps
   return (
      <div className="w-full  p-2">
        <Link to={`/app/${id}`}>
           <div className="card bg-base-100 border m-2 shadow-sm hover:scale-105 transition ease-in-out ">
           <figure className='h-48 overflow-hidden rounded-xl'>
               <img className='w-full object-cover'src={image} alt="Shoes" />
           </figure>
  <div className="card-body">
   <h2 className="card-title">
    {title}
    
   </h2>
              <div className=" card-actions justify-between">
            <div className=" flex flex-row gap-2 "> <div className="rating"></div >
        <img className='h-5' src={rating} alt="" /> {ratingAvg}</div>
           <div className=" flex flex-row gap-2 "> <img className='h-5' src={download} alt="" />{downloads}M</div>
          </div>
        </div>
       </div>
        </Link>
      </div>
   );
};

export default AppCard;