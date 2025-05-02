import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'; // Toast import

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: []
  },
  reducers: {
    addtoCart: (state, actions) => {
      const mydata = state.cart.filter(key => key.id == actions.payload.id);
      if (mydata.length >= 1) {
        toast.error("Product already added!", {
          position: "top-center"
        });
      } else {
        state.cart.push(actions.payload);
        toast.success("Successfully added to cart!", {
          position: "top-center"
        });
      }
    },

    qntyIncrese: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          state.cart[i].qnty++;
        }
      }
    },

    qntyDecrease: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          if (state.cart[i].qnty <= 1) {
            toast.warn("Quantity cannot be less than one!", {
              position: "top-center"
            });
          } else {
            state.cart[i].qnty--;
          }
        }
      }
    },

    dataRemove: (state, actions) => {
      state.cart = state.cart.filter(key => key.id != actions.payload.id);
    }
  }
});

export const { addtoCart, qntyIncrese, qntyDecrease, dataRemove } = cartSlice.actions;
export default cartSlice.reducer;
