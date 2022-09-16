import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../data/item.json";
import ProductId from "./ProductId";

const Product = () => {
  const [ fade, setFade ] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setFade(true)
    },2000)
    setFade(false)
  },[])

  let { id } = useParams();
  const products = datas.filter((list) => list.id == id);
  return (
    <div className="product">
      <div className="acc">
        <h1>액세서리</h1>
      </div>
     <div className="banner" style={{ background: `${fade ? "#eee" : "#0071e3"}` }}>
        <h1>AirPods을 구입하면 Apple Music이 6개월 무료.⁺</h1>
      </div>
      {products.map((product) => {
        return (
          <div className="product-w">
            <div className="product-wrap">
              <div className="product-text">
                <h5>무료 각인</h5>
                <ProductId key={product.id} {...product} />
              </div>
              <div className="product-img">
                <img src={`/public/${product.img}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Product;
