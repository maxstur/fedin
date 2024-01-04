// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
// import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

// export const Item = () => {
//   const [product, setProduct] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       axios
//         .get(`https://dummyjson.com/products/${id}`)
//         .then((res) => {
//           setProduct(res.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }, 2000);

//     return () => clearTimeout(timerId);
//   }, [id]);

//   return (
//     <div>
//       {loading ? (
//         <LoaderComponent />
//       ) : (
//         <ItemDetailContainer product={product} />
//       )}
//     </div>
//   );
// };


