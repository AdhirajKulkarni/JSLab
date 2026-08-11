const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const itemQuantity = document.getElementById('itemQuantity');
const addItemBtn = document.getElementById('addItemBtn');
const cartList = document.getElementById('cartList');
const subtotalAmount = document.getElementById('subtotalAmount');
const discountAmount = document.getElementById('discountAmount');
const totalAmount = document.getElementById('totalAmount');
const couponCode = document.getElementById('couponCode');
const applyCouponBtn = document.getElementById('applyCouponBtn');
const couponMessage = document.getElementById('couponMessage');

const coupons = {
  SAVE10: 10,
  SAVE20: 20,
  VIP50: 50
};

let cart = [];
let activeDiscount = 0;
let activeCoupon = null;

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function renderCart() {
  cartList.innerHTML = '';
  if (cart.length === 0) {
    cartList.innerHTML = '<p class="empty">Cart is empty. Add an item above.</p>';
  } else {
    cart.forEach((item, index) => {
      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      itemRow.innerHTML = `
        <div>
          <div class="item-name">${item.name}</div>
          <div class="item-detail">${item.quantity} × ${formatCurrency(item.price)} = ${formatCurrency(item.total)}</div>
        </div>
        <div class="item-detail">${formatCurrency(item.total)}</div>
        <button type="button" data-index="${index}">Remove</button>
      `;
      const removeBtn = itemRow.querySelector('button');
      removeBtn.addEventListener('click', () => {
        cart.splice(index, 1);
        renderCart();
      });
      cartList.appendChild(itemRow);
    });
  }

  updateTotals();
}

function updateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const discount = Math.min(subtotal * (activeDiscount / 100), subtotal);
  const total = subtotal - discount;

  subtotalAmount.textContent = formatCurrency(subtotal);
  discountAmount.textContent = formatCurrency(discount);
  totalAmount.textContent = formatCurrency(total);
}

function addItem() {
  const name = itemName.value.trim();
  const price = parseFloat(itemPrice.value);
  const quantity = parseInt(itemQuantity.value, 10);

  if (!name || Number.isNaN(price) || price <= 0 || Number.isNaN(quantity) || quantity <= 0) {
    alert('Please enter a valid item name, price, and quantity.');
    return;
  }

  const total = price * quantity;
  cart.push({ name, price, quantity, total });
  itemName.value = '';
  itemPrice.value = '';
  itemQuantity.value = '1';
  activeCoupon = null;
  activeDiscount = 0;
  couponMessage.textContent = '';
  couponCode.value = '';
  renderCart();
}

function applyCoupon() {
  const code = couponCode.value.trim().toUpperCase();
  if (!code) {
    couponMessage.textContent = 'Please enter a coupon code.';
    couponMessage.style.color = '#d53f8c';
    return;
  }

  if (!cart.length) {
    couponMessage.textContent = 'Add items before applying a coupon.';
    couponMessage.style.color = '#d53f8c';
    return;
  }

  const discount = coupons[code];
  if (!discount) {
    couponMessage.textContent = 'Invalid coupon code.';
    couponMessage.style.color = '#d53f8c';
    activeCoupon = null;
    activeDiscount = 0;
  } else {
    activeCoupon = code;
    activeDiscount = discount;
    couponMessage.textContent = `Coupon ${code} applied: ${discount}% off`;
    couponMessage.style.color = '#2f855a';
  }
  updateTotals();
}

addItemBtn.addEventListener('click', addItem);
applyCouponBtn.addEventListener('click', applyCoupon);
renderCart();
