import produce from "immer";

function cart(state = [], action) {
   switch (action.type) {
      case "@cart/ADD_ITEM":
         return produce(state, draft => {
            // Procura um item no array "cart"
            const productIndex = draft.findIndex(
               p => p.id === action.product.id
            );

            // Verifica se o produto já existe no carrinho
            // Se existir, soma 1 à quantidade. Senão, inclui um novo item com a quantidade 1
            if (productIndex >= 0) {
               draft[productIndex].amount += 1;
            } else {
               draft.push({ ...action.product, amount: 1 });
            }
         });

      case "@cart/REMOVE_ITEM":
         return produce(state, draft => {
            // Procura um item no array "cart"
            const productIndex = draft.findIndex(p => p.id === action.id);

            if (productIndex >= 0) {
               // Remove item do array
               draft.splice(productIndex, 1);
            }
         });

      case "@cart/UPDATE_AMOUNT": {
         if (action.amount <= 0) {
            return state;
         }

         return produce(state, draft => {
            // Procura um item no array "cart"
            const productIndex = draft.findIndex(p => p.id === action.id);

            if (productIndex >= 0) {
               // Atualiza quantidade do item no "cart"
               draft[productIndex].amount = Number(action.amount);
            }
         });
      }
      default:
         return state;
   }
}

export default cart;
