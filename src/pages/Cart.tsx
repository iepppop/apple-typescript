import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/CartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

const Cart = () => {
  const { items, formatCurrency } = useShoppingCart();
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
            <div style={{padding:"20px 0"}}>
            <div className="cart-line">
              <span>소계</span>
              <span>50000</span>
            </div>
            <div className="cart-line">
              <span>배송</span>
              <span>무료</span>
            </div>
            </div>
            <div className="cart-sum">
              <div className="cart-line">
                <span style={{fontWeight:"900", fontSize:"1.4rem"}}>총계</span>
                <div className="cart-card">
                  <span style={{fontWeight:"900", fontSize:"1.4rem"}}>{formatCurrency(78000)}</span>
                  <h5>최대 12개월 신용 카드 할부</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
