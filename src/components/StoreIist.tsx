import { useShoppingCart } from "../context/CartContext";
import datas from '../data/item.json'
import Item from "./Item";

const StoreIist = () => {
  // const { data } = useShoppingCart()
  return (
    <div className="storelist">
      <h1>당신에게 알맞은 AirPods은?</h1>
      <ul>
        {datas.map(data=>{
            return (
                <Item key={data.name} {...data} />
            )
        })}
      </ul>
    </div>
  );
};
export default StoreIist;
