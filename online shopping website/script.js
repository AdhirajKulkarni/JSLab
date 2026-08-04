const qtyElements = Array.from(document.querySelectorAll('.qty'));
const promoInput = document.getElementById('promo');
const promoBtn = document.getElementById('promoBtn');
const promoMessage = document.getElementById('promoMessage');

const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const orderTotalEl = document.getElementById('orderTotal');
const billSubtotalEl = document.getElementById('billSubtotal');
const billShippingEl = document.getElementById('billShipping');
const discountEl = document.getElementById('discount');
const billTotalEl = document.getElementById('billTotal');

let discountPercent = 0;

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function calculateBill() {
  const subtotal = qtyElements.reduce((sum, select) => {
    return sum + Number(select.value) * Number(select.dataset.price);
  }, 0);

  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 12.99) : 0;
  const discountAmount = subtotal > 0 ? subtotal * (discountPercent / 100) : 0;
  const total = subtotal + shipping - discountAmount;

  subtotalEl.textContent = formatCurrency(subtotal);
  shippingEl.textContent = formatCurrency(shipping);
  orderTotalEl.textContent = formatCurrency(total);

  billSubtotalEl.textContent = formatCurrency(subtotal);
  billShippingEl.textContent = formatCurrency(shipping);
  discountEl.textContent = formatCurrency(discountAmount);
  billTotalEl.textContent = formatCurrency(total);
}

qtyElements.forEach((select) => {
  select.addEventListener('change', calculateBill);
});

promoBtn.addEventListener('click', () => {
  const code = promoInput.value.trim().toUpperCase();

  if (code === 'SAVE10') {
    discountPercent = 10;
    promoMessage.textContent = '10% discount applied!';
    promoMessage.style.color = '#0f8a5f';
  } else if (code === 'WELCOME') {
    discountPercent = 5;
    promoMessage.textContent = '5% discount applied!';
    promoMessage.style.color = '#0f8a5f';
  } else {
    discountPercent = 0;
    promoMessage.textContent = 'Promo code not valid. Try SAVE10 or WELCOME.';
    promoMessage.style.color = '#b42318';
  }

  calculateBill();
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  alert('Thanks for shopping with Amazona! Your order is ready to be placed.');
});

calculateBill();
