import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  getDoc,
  doc,
  where,
  query,
} from "firebase/firestore";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((res) => {
        const data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts( data); 
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error};
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


useEffect (() => {
  const db = getFirestore();
  const productDoc = doc(db, "products", id);
  getDoc(productDoc)
    .then((res) => setProduct({ id: res.id, ...res.data() }))
    .catch(() => setError(true))
    .finally(() => setLoading(false));
}, []);

return { product, loading, error };
};

export const useAllproductsByFilter = (collectionName, categoryId, fildToFilter) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      const db = getFirestore();
      const productsCollection = collection(db, collectionName);
      const q = query(productsCollection, where(fildToFilter, "==", categoryId));
      getDocs(q)
        .then((res) => {
          const data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProducts(data);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, [categoryId]);
    return { products, loading, error };
}
