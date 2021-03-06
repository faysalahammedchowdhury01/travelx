const marsCost = 5000;
const moonCost = 3000;

function handleQuantity(plannet, operator) {
  const quantityInput = document.getElementById(plannet + '-quantity');
  const quantityText = quantityInput.value;
  let quantity = parseInt(quantityText);

  if (quantity < 0 || isNaN(quantity)) {
    quantity = '';
  }

  if (operator == 'plus') {
    quantity++;
  } else if (operator == 'minus') {
    if (quantity <= 0) {
      return;
    }
    quantity--;
  } else {
    quantity = quantity;
  }

  quantityInput.value = quantity;
  updateBalance(plannet, quantity);
}

let totalMarsCost = 0;
let totalMoonCost = 0;
function updateBalance(plannet, quantity) {
  const plannetCost = document.getElementById(plannet + '-cost');
  if (plannet == 'mars') {
    totalMarsCost = marsCost * quantity;
    plannetCost.innerText = totalMarsCost;
  } else {
    totalMoonCost = moonCost * quantity;
    plannetCost.innerText = totalMoonCost;
  }
  updateTotalBalance(totalMarsCost, totalMoonCost);
}

function updateTotalBalance(totalMarsCost, totalMoonCost) {
  const total = totalMarsCost + totalMoonCost;
  const totalCost = document.getElementById('total-cost');
  totalCost.innerText = total;
}
