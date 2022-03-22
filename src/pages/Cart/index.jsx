import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { delCartProduct } from "../../store/modules/CartProducts/actions";
import "./styles.css";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);

  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => {
    dispatch(delCartProduct(product));
    toast.success("Produto removido");
  };

  return (
    <>
      <div className="clusterDiv">
        {cartProducts.map((product) => (
          <div key={product.id} className="cardDiv">
            <img
              src={product.img}
              alt="Imagem do produto"
              className="productImg"
            ></img>
            <h4 className="productName">{product.name}</h4>
            <p className="productValue">{product.value}</p>
            <button
              onClick={() => handleRemoveProduct(product)}
              className="removeButton"
            >
              Remover do carrinho
            </button>
          </div>
        ))}
      </div>
      <button className="purchaseButton">Finalizar compra</button>
    </>
  );
};

export default Cart;
