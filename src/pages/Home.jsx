import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading, Setloading] = useState(false);
  const [post,setpost] = useState([]);

  async function fetchProductdata(){
    Setloading(true);

    try{
      const result = await fetch(API_URL);
      const data = await result.json();
      
      setpost(data);

    }
    catch(err){
        console.log("Error")
        setpost([]);
    }
    Setloading(false);
  }

  useEffect(() => {
    fetchProductdata()
  },[])

  return (
    <div>
      {
        loading ? <Spinner/>:
        post.length>0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 gap-x-5 min-h-[80vh]">
        {
          post.map((post) =>(
          <Product key = {post.id} post={post} />
        ))
        }
        
        </div>):
        <div>
          <p className="flex justify-center items-center">
            No Data Found
          </p>
        </div>
      }

    </div>
  );
};

export default Home;
