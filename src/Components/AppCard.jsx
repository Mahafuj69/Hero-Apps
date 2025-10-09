import { Link } from 'react-router';
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
              <div className="card-actions justify-between">
            <div className="  gap-2 "> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled value={ratingAvg}/>
</div> {ratingAvg}</div>
           <div className=" gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-cloud"><path d="M12 15V3"/><path d="M19 10a7 7 0 1 0-14 0"/><polyline points="8 15 12 19 16 15"/></svg>{downloads}</div>
          </div>
        </div>
       </div>
        </Link>
      </div>
   );
};

export default AppCard;