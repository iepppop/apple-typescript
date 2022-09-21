import datas from "../data/item.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = datas.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <li>
      <div className="cart-img-wrap">
        <img src={item.img} />
      </div>
      <div className="cart-text-wrap">
        <div className="cart-title">
          <h1>{item.name}</h1>
          <span>{quantity}</span>
          <h1>{item.price}</h1>
        </div>
        <div className="cart-title-two">
          <div className="cart-i">
            <i className="fa-brands fa-apple"></i>
          </div>
          <div className="cart-applecare">
            <h1>헤드폰을 위한 AppleCare+ - AirPods 추가, ₩69,000</h1>
            <h2>
              최대 2년간 우발적인 손상에 대한 횟수 제한 없는 수리 서비스와 추가
              기술 지원을 받아보세요.
            </h2>
            <h2 style={{ color: "#0071e3" }}>더 알아보기</h2>
          </div>
        </div>
        <div className="cart-title-two" style={{ height: "5rem" }}>
          <i className="fa-solid fa-check" style={{ color: "#000" }}></i>
          <div className="cart-applecare">
            <h1>무료 각인도 추가하세요</h1>
          </div>
        </div>
        <div className="cart-title-two" style={{ height: "5rem" }}>
          <i className="fa-solid fa-gift" style={{ color: "#000" }}></i>
          <div className="cart-applecare">
            <h1>선물 메시지 또는 선물 포장 추가</h1>
          </div>
        </div>
        <div className="cart-title-two" style={{ height: "5rem" }}>
          <div className="cart-delievery">
            이 제품을 얼마나 빨리 받을 수 있는지 확인해보십시오.{" "}
            <span>
              우편번호 입력{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#0071e3", fontSize:"0.5rem", paddingLeft: "5px", paddingTop: "3px"}}
              ></i>
            </span>
          </div>
          <i
            className="fa-solid fa-bag-shopping"
            style={{ color: "#000", marginTop: "60px" }}
          ></i>
          <div className="cart-store">
            <h1>가까운 Apple Store에서 픽업하십시오.</h1>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
