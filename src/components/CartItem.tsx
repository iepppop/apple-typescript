import datas from "../data/item.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = datas.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      {item.name}
    </>
  )
};
export default CartItem;
