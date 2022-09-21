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
        <div className="cart-total-amount">
          <div className="cart-gap"></div>
          <div className="cart-amount">
            <div className="cart-line">
              <span>소계</span>
              <span>50000</span>
            </div>
            <div className="cart-line">
              <span>배송</span>
              <span>무료</span>
            </div>
            <div className="cart-sum">
              <div className="cart-line">
                <span>총계</span>
                <span>
                  <h1>ddd</h1>
                  <h1>ddd</h1>
                  <h1>ddd</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
