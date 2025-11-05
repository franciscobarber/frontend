export async function fetchCatalog() {
  const res = await fetch('/api/catalog');
  return res.json();
}

export async function fetchCart() {
  const res = await fetch('/api/cart');
  return res.json();
}

export async function addToCart(item) {
  const res = await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  return res.json();
}

export async function createOrder(order) {
  const res = await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });
  return res.json();
}
