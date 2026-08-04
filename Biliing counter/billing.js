// Billing Calculator Logic

let items = [];

function addItem() {
  const nameInput = document.getElementById("itemName");
  const priceInput = document.getElementById("itemPrice");
  const qtyInput = document.getElementById("itemQty");

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);
  const qty = parseFloat(qtyInput.value) || 1;

  if (!name || isNaN(price) || price <= 0) {
    alert("Sahi item name aur price daalo bhai!");
    return;
  }

  items.push({ name, price, qty });
  renderItems();

  // clear inputs
  nameInput.value = "";
  priceInput.value = "";
  qtyInput.value = 1;
  nameInput.focus();
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
}

function renderItems() {
  const list = document.getElementById("itemsList");
  list.innerHTML = "";

  items.forEach((item, index) => {
    const total = (item.price * item.qty).toFixed(2);
    const row = document.createElement("div");
    row.innerHTML = `
      <span>${item.name} (${item.qty} x ₹${item.price})</span>
      <span>₹${total} <a href="#" onclick="removeItem(${index}); return false;" style="color:red; margin-left:6px;">✕</a></span>
    `;
    list.appendChild(row);
  });
}

function calculateBill() {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const taxPercent = parseFloat(document.getElementById("taxPercent").value) || 0;
  const discountPercent = parseFloat(document.getElementById("discountPercent").value) || 0;

  const taxAmt = (subtotal * taxPercent) / 100;
  const discAmt = (subtotal * discountPercent) / 100;

  const grandTotal = subtotal + taxAmt - discAmt;

  document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
  document.getElementById("taxAmt").innerText = "₹" + taxAmt.toFixed(2);
  document.getElementById("discAmt").innerText = "₹" + discAmt.toFixed(2);
  document.getElementById("grandTotal").innerText = "₹" + grandTotal.toFixed(2);
}

function resetBill() {
  items = [];
  renderItems();
  document.getElementById("taxPercent").value = 0;
  document.getElementById("discountPercent").value = 0;
  document.getElementById("subtotal").innerText = "₹0.00";
  document.getElementById("taxAmt").innerText = "₹0.00";
  document.getElementById("discAmt").innerText = "₹0.00";
  document.getElementById("grandTotal").innerText = "₹0.00";
}
