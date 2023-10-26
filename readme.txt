    carrito.forEach(producto => {
            if (cartItem.name === producto.name) {
                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                parseInt(cartItem.price) + " Rs.";
                cartTotal += parseInt(cartItem.price)
                document.querySelector('.pay').innerText = cartTotal + " Rs.";
              }
            
        });