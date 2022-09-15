import { Link } from 'react-router-dom'

type StoreItemProps = {
  name: string;
  id: number;
  price: number;
  prev: string;
  sub: string;
};

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "KRW",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

const Item = ({ id, name, price, sub, prev }: StoreItemProps) => {
  return (
    <li>
      <div className="img-wrap">
        <img src={prev} alt={name} />
      </div>
      <div className="text-wrap">
        <h2>{name}</h2>
        {sub === null ? (
          <div style={{ height: "1.3rem" }}></div>
        ) : (
          <h3>{sub}</h3>
        )}
        <h4>{formatCurrency(price)}</h4>
        <Link to={`/product/${id}`}>
        <button type="button">구입하기</button>
        </Link>
      </div>
    </li>
  );
};
export default Item;
