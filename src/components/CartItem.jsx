
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';


const CartItem = ({item,itemIndex}) => {
  const dispacth = useDispatch();

  function removefromcart(){
    dispacth(remove(item.id));
    toast.success("Item Removed")
  }

  return (
    <div>
      
      <div>
        
        <div>
          <img src={item.image} alt=''/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removefromcart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

export default CartItem;
