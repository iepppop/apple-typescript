type ProductId = {
  img: string;
  prev: string;
  name: string;
  id: number;
  price: number;
};

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "KRW",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

const ProductId = ({ id, img, prev, name, price }: ProductId) => {
  return (
    <div className="product-id" key={id}>
      <h1>{name}</h1>
      <h2>{formatCurrency(price)}</h2>
      <h3>최대 12 개월 신용 카드 할부</h3>
      <span />
      <div className="option">
        <i className="fa-solid fa-check"></i>
        <h4>
          무료 각인 서비스
          <span>
            이모티콘, 이름, 이니셜, 숫자를 조합한 각인으로 나만의 AirPods
            만들기. 오직 Apple에서만.
          </span>
        </h4>
      </div>
      <div className="option-t">
      <i className="fa-regular fa-circle"></i>
        <h4>
          픽업:
          <span>
            재고 확인
          </span>
        </h4>
      </div>
      <div className="option-t">
      <i className="fa-solid fa-truck-moving"></i>
        <h4>
          도착:
          <div className="deliever">월 2022/09/19 — 무료 배송</div>
          <span>
            추가 배송 옵션 확인
          </span>
        </h4>
      </div>
      <button type="button">
        장바구니에 담기
      </button>
      <div className="bookmark">
        <div className="bookmark-text">
         <h4>아직 고민 중이신가요?</h4> 
         <h2>이 항목을 목록에 추가해두었다가 나중에 다시 살펴보세요.</h2>
          </div>
          <div className="bookmark-icon">
          <i className="fa-regular fa-bookmark"></i>
          </div>
      </div>
      <span />
      <div className="help">
        <div className="help-icon">

        </div>
        <div className="help-text">
        제품 구입에 필요한 도움을 받아보세요. 지금 채팅하기 서비스를 이용하거나 080-330-8877에 전화로 문의하세요.
        </div>
      </div>
    </div>
  );
};
export default ProductId;
