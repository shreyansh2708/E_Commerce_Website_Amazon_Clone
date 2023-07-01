export const initialState = {
    basket: [],
    user: null
  };

  
  // Selector
  export const getBasketTotal = (basket) => {
    const totalAmount = basket?.reduce((amount, item) => {
      const itemPrice = parseInt(item.price.replace(",", ""), 10); // Convert the price to an integer
      return itemPrice + amount;
    }, 0);
  
    return totalAmount || 0; // Return the total amount or 0 if basket is empty or undefined
  };
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

      case "ADD_TO_BASKET":
        return{
          ...state,//like the prevValue
          basket: [...state.basket,action.item],
        };
            
      case "EMPTY_BASKET":
      return{
        ...state,
        basket: [],
      };
            
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];

        if (index >= 0) {
          //Splice is used to add, remove, or replace elements in an array.
          //index: The index at which to start modifying the array.
          //1: The number of elements to remove from the array starting at the specified index. 
          //In this case, it indicates that only one element should be removed.
          newBasket.splice(index, 1);
        } 
        else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
        return {
          ...state,
          basket: newBasket
        }

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }


      default:
        return state;
    }
  };
  
  export default reducer;
 