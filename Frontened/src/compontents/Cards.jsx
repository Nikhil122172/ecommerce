import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Details from './Details';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    const navigate = useNavigate();

    // Log the item to check if it is received in the Cards component
    console.log("Received item in Cards2:", item);

    // Handle card click to navigate to product details
    const handleCardClick = () => {
      console.log("Navigating with item:", item);
      sessionStorage.setItem('item', JSON.stringify(item)); // Store item in session storage
      navigate('/details');
    };

    return (
        <div
            className="card bg-base-100 w-full sm:w-72 md:w-80 shadow-xl dark:bg-slate-900 dark:text-white dark:border cursor-pointer transform transition-all hover:scale-105 hover:rotate-2"
            onClick={handleCardClick}
        >
            {/* Image Section */}
            <figure className="h-32 sm:h-40 md:h-44 flex items-center justify-center overflow-hidden mb-4">
                <img
                    src={item?.image || 'https://via.placeholder.com/300'}
                    alt={item?.title || 'Product Image'}
                    className="object-cover w-32 sm:w-40 md:w-44 transition-transform duration-300 ease-in-out"
                />
            </figure>

            {/* Card Body Section */}
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-white">
                    {item?.name || 'Unnamed Product'}
                    <div className="bg-green-700 text-white rounded-full px-3 py-1 text-sm ml-3">
                        {item?.category || 'Uncategorized'}
                    </div>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item?.title || 'No description available'}</p>
                <div className="card-actions justify-between mt-4">
                    <div className="badge badge-outline text-gray-800 dark:text-white">
                        {/* ₹{item?.price ? item.price.toFixed(2) : '0.00'} */}
                        ₹{item?.price}
                    </div>
                    <div className="badge badge-outline text-gray-600 dark:text-gray-300">
                        {item?.rating?.rate ? `${item.rating.rate} ★` : 'No ratings'}
                    </div>
                </div>
            </div>
        </div>
    );
}

// function Cards({ item }) {
//   const navigate = useNavigate();

//   console.log("ye item hai",item);
  
//   const handleCardClick = () => {
//     navigate('/details', {
//       state: { item }
      
//     });
//   };

//   return (
//     <div
//       className="card bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border cursor-pointer"
//       // onClick={handleCardClick}
//     >
//       <figure className="h-40 flex items-center justify-center overflow-hidden mb-4">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="object-contain h-full"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">
//           {item.name}
//           <div className="bg-green-700 text-white rounded-full px-3 py-1 text-sm ml-3">
//             {item.category}
//           </div>
//         </h2>
//         <p>{item.title}</p>
//         <div className="card-actions justify-between mt-4">
//           <div className="badge badge-outline">${item.price}</div>
//           <Link to="/details" state={{ item }}>
//             <div
//               className="badge badge-outline hover:bg-green-700 hover:duration-200 hover:text-white"
//             >
//               Buy Now
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Cards({ item }) {
//     const navigate = useNavigate();

//     // Log the item to check if it is received in the Cards component
//     console.log("Received item in Cards2:", item);

//     // const handleCardClick = () => {
//     //     console.log("Navigating with item:", item);
//     //     navigate('/details', { state: { item } });
//     // };

//     const handleCardClick = () => {
//       console.log("Navigating with item:", item);
//       sessionStorage.setItem('item', JSON.stringify(item)); // Store in session storage
//       navigate('/details');
//   };
  

//     return (
//         <div
//             className="card bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border cursor-pointer"
//             onClick={handleCardClick}
//         >
//             <figure className="h-40 flex items-center justify-center overflow-hidden mb-4">
//                 <img
//                     src={item?.image || ''}
//                     alt={item?.title || ''}
//                     className="object-contain h-full"
//                 />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">
//                     {item?.name || 'Unnamed'}
//                     <div className="bg-green-700 text-white rounded-full px-3 py-1 text-sm ml-3">
//                         {item?.category || 'Uncategorized'}
//                     </div>
//                 </h2>
//                 <p>{item?.title || 'No title'}</p>
//                 <div className="card-actions justify-between mt-4">
//                     <div className="badge badge-outline">${item?.price || '0.00'}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // export default Cards;


export default Cards;