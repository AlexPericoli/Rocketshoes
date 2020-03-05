import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import {
   Container,
   Logotipo,
   LogotipoImage,
   LogotipoText,
   Cart
} from "./styles";
import logotipo from "../../assets/images/logotipo.png";

function Header({ cart, cartSize }) {
   let cartSizeText = "";

   if (cartSize > 1) {
      cartSizeText = `${cartSize} itens`;
   } else {
      cartSizeText = `${cartSize} item`;
   }

   return (
      <Container>
         <Link to="/">
            <Logotipo>
               <LogotipoImage src={logotipo} alt="Rocketshoes" />
               <LogotipoText>Rocket Shoes</LogotipoText>
            </Logotipo>
         </Link>

         <Link to="/cart">
            <div>
               <Cart>
                  <div>
                     <strong>Meu carrinho</strong>
                     <span>{cartSizeText}</span>
                  </div>
                  <MdShoppingCart size={36} color="#fff" />
               </Cart>
            </div>
         </Link>
      </Container>
   );
}
/*
mapStateToProps = state => {
   xica: state: cart;
};
*/
export default connect(state => ({
   cart: state.cart,
   cartSize: state.cart.length
}))(Header);
