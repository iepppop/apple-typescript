import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/CartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

const Cart = () => {
  const { items } = useShoppingCart();
  return (
    <div className="cart-wrap ">
      <div className="cart">
        <h1>장바구니에 들어 있는 제품입니다 ₩1,065,000.</h1>
        <h2>모든 주문에 무료 배송 서비스가 제공됩니다.</h2>
        <button>결제</button>
        <span />
        <ul>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Cart;
