import React from "react";
import { connect } from "react-redux";
import { formatPrice } from "../../util/format";
import { removeFromCart, updateAmount } from "../../store/modules/cart/actions";
import { Container, ProductTable, Total } from "./styles";
import {
   MdRemoveCircleOutline,
   MdAddCircleOutline,
   MdDelete
} from "react-icons/md";

function Cart({ cart, total, dispatch }) {
   function incrementItem(product) {
      dispatch(updateAmount(product.id, product.amount + 1));
   }

   function decrementItem(product) {
      dispatch(updateAmount(product.id, product.amount - 1));
   }

   return (
      <Container>
         <ProductTable>
            <thead>
               <tr>
                  <th />
                  <th>Nome</th>
                  <th>Qtd.</th>
                  <th>Subtotal</th>
                  <th />
               </tr>
            </thead>
            <tbody>
               {cart.map(product => (
                  <tr key={product.id}>
                     <td>
                        <img src={product.image} alt="" />
                     </td>
                     <td className="cartItemTitle">
                        <strong>{product.title}</strong>
                        <span>{product.price}</span>
                     </td>
                     <td>
                        <div>
                           <button type="button">
                              <MdRemoveCircleOutline
                                 size={20}
                                 color="#7159c1"
                                 onClick={() => decrementItem(product)}
                              />
                           </button>
                           <input
                              type="number"
                              readOnly
                              value={product.amount}
                           />
                           <button type="button">
                              <MdAddCircleOutline
                                 size={20}
                                 color="#7159c1"
                                 onClick={() => incrementItem(product)}
                              />
                           </button>
                        </div>
                     </td>
                     <td>
                        <strong>{product.subTotal}</strong>
                     </td>
                     <td>
                        <button
                           type="button"
                           onClick={() => dispatch(removeFromCart(product.id))}
                        >
                           <MdDelete size={20} color="#7159c1" />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </ProductTable>
         <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
               <span>TOTAL</span>
               <strong>{total}</strong>
            </Total>
         </footer>
      </Container>
   );
}

const mapStateToProps = state => ({
   cart: state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount)
   })),
   total: formatPrice(
      state.cart.reduce((total, product) => {
         return total + product.price * product.amount;
      }, 0)
   )
});

export default connect(mapStateToProps)(Cart);
