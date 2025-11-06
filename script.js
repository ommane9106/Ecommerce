// Products Data
const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    description: "Noise-cancelling Bluetooth headphones with 30-hour battery life", 
    emoji: "🎧",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    price: 1999,
    stock: 15
  },
  { 
    id: 2, 
    name: "Smartwatch", 
    description: "Fitness tracker with heart-rate monitor and GPS", 
    emoji: "⌚",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    price: 2999,
    stock: 20
  },
  { 
    id: 3, 
    name: "Laptop Backpack", 
    description: "Water-resistant laptop backpack (15-inch) with USB charging port", 
    emoji: "🎒",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    price: 999,
    stock: 30
  },
  { 
    id: 4, 
    name: "Wireless Mouse", 
    description: "Ergonomic wireless mouse with precision tracking", 
    emoji: "🖱️",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    price: 599,
    stock: 50
  },
  { 
    id: 5, 
    name: "USB-C Hub", 
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader", 
    emoji: "🔌",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    price: 1299,
    stock: 25
  },
  { 
    id: 6, 
    name: "Portable Charger", 
    description: "20000mAh power bank with fast charging support", 
    emoji: "🔋",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    price: 1499,
    stock: 40
  },
  { 
    id: 7, 
    name: "Gaming Keyboard", 
    description: "Mechanical RGB gaming keyboard with customizable keys", 
    emoji: "⌨️",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    price: 3499,
    stock: 18
  },
  { 
    id: 8, 
    name: "Webcam HD", 
    description: "1080p HD webcam with auto-focus and noise reduction", 
    emoji: "📹",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&q=80",
    price: 2299,
    stock: 22
  },
  { 
    id: 9, 
    name: "Bluetooth Speaker", 
    description: "Portable waterproof speaker with 360° sound", 
    emoji: "🔊",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    price: 1799,
    stock: 35
  },
  { 
    id: 10, 
    name: "Phone Stand", 
    description: "Adjustable aluminum phone stand for desk use", 
    emoji: "📱",
    image: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500&q=80",
    price: 799,
    stock: 60
  },
  { 
    id: 11, 
    name: "Wireless Earbuds", 
    description: "True wireless earbuds with active noise cancellation", 
    emoji: "🎵",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    price: 4999,
    stock: 12
  },
  { 
    id: 12, 
    name: "Monitor Stand", 
    description: "Ergonomic monitor stand with storage compartment", 
    emoji: "🖥️",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    price: 1899,
    stock: 28
  },
  { 
    id: 13, 
    name: "Cable Organizer", 
    description: "Magnetic cable management system for clean desk setup", 
    emoji: "🔗",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    price: 599,
    stock: 75
  },
  { 
    id: 14, 
    name: "LED Desk Lamp", 
    description: "Smart LED desk lamp with wireless charging base", 
    emoji: "💡",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    price: 2799,
    stock: 16
  },
  { 
    id: 15, 
    name: "External SSD", 
    description: "1TB portable SSD with USB 3.2 Gen 2 for ultra-fast transfers", 
    emoji: "💾",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
    price: 8999,
    stock: 8
  }
];

// Cart Management
let cart = [];
let currentPage = 'home';

// Initialize App
function initializeApp() {
  console.log('Initializing app...');
  console.log('Products loaded:', products.length);
  
  loadCart();
  updateCartCount();
  renderCurrentPage();
  setupNavigation();
}

// Setup Navigation
function setupNavigation() {
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = e.target.closest('[data-page]').dataset.page;
      console.log('Navigating to:', currentPage);
      renderCurrentPage();
    });
  });
}

// Render Current Page
function renderCurrentPage() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    console.error('main-content element not found!');
    return;
  }
  
  console.log('Rendering page:', currentPage);
  
  switch(currentPage) {
    case 'home':
      renderHomePage();
      break;
    case 'shop':
      renderShopPage();
      break;
    case 'cart':
      renderCartPage();
      break;
    case 'checkout':
      renderCheckoutPage();
      break;
    case 'success':
      renderSuccessPage();
      break;
  }
}

// Render Home Page
function renderHomePage() {
  document.getElementById('main-content').innerHTML = `
    <section class="hero">
      <div class="container">
        <h1>Discover Amazing Products</h1>
        <p>Shop the latest tech at unbeatable prices</p>
      </div>
    </section>
    
    <section class="products-section">
      <div class="container">
        <h2 class="section-title">Featured Products</h2>
        <div class="products-grid">
          ${products.slice(0, 6).map(product => `
            <div class="product-card">
              <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : product.emoji}
              </div>
              <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                  <span class="product-price">₹${product.price}</span>
                  <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <button class="btn btn-primary" onclick="navigateTo('shop')" style="padding: 16px 48px; font-size: 16px;">View All Products</button>
        </div>
      </div>
    </section>
  `;
}

// Render Shop Page
function renderShopPage() {
  document.getElementById('main-content').innerHTML = `
    <section class="products-section">
      <div class="container">
        <h2 class="section-title">All Products</h2>
        <div class="products-grid">
          ${products.map(product => `
            <div class="product-card">
              <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : product.emoji}
              </div>
              <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                  <span class="product-price">₹${product.price}</span>
                  <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Render Cart Page
function renderCartPage() {
  if (cart.length === 0) {
    document.getElementById('main-content').innerHTML = `
      <section class="cart-section">
        <div class="container">
          <div class="empty-cart">
            <div class="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <button class="btn btn-primary" onclick="navigateTo('shop')">Continue Shopping</button>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  document.getElementById('main-content').innerHTML = `
    <section class="cart-section">
      <div class="container">
        <h2 class="section-title">Shopping Cart</h2>
        
        <div class="cart-items">
          ${cart.map(item => `
            <div class="cart-item">
              <div class="cart-item-image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` : item.emoji}
              </div>
              <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price}</p>
                <div class="quantity-controls">
                  <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                  <span class="quantity-display">${item.quantity}</span>
                  <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                  <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
              </div>
              <div style="text-align: right;">
                <p style="font-size: 20px; font-weight: 700; color: #007BFF;">₹${item.price * item.quantity}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="cart-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>₹${subtotal}</span>
          </div>
          <div class="summary-row">
            <span>Tax (18%):</span>
            <span>₹${tax}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>₹${total}</span>
          </div>
          <button class="btn btn-success" onclick="navigateTo('checkout')" style="width: 100%; margin-top: 24px; padding: 16px; font-size: 16px;">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  `;
}

// Render Checkout Page
function renderCheckoutPage() {
  if (cart.length === 0) {
    navigateTo('cart');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  document.getElementById('main-content').innerHTML = `
    <section class="checkout-section">
      <div class="container">
        <h2 class="section-title">Checkout</h2>
        
        <div class="checkout-grid">
          <div class="checkout-form">
            <h3 style="margin-bottom: 24px;">Billing Information</h3>
            <form id="checkout-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" required>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" required>
              </div>
              
              <div class="form-group">
                <label for="address">Shipping Address *</label>
                <textarea id="address" rows="3" required></textarea>
              </div>
              
              <div class="form-group">
                <label for="payment">Payment Method *</label>
                <select id="payment" required>
                  <option value="">Select payment method</option>
                  <option value="card">Credit/Debit Card (Demo)</option>
                  <option value="upi">UPI (Demo)</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
              
              <button type="submit" class="btn btn-success" style="width: 100%; padding: 16px; font-size: 16px;">Place Order</button>
            </form>
          </div>
          
          <div class="cart-summary">
            <h3 style="margin-bottom: 24px;">Order Summary</h3>
            ${cart.map(item => `
              <div class="summary-row" style="font-size: 14px; margin-bottom: 8px;">
                <span>${item.name} × ${item.quantity}</span>
                <span>₹${item.price * item.quantity}</span>
              </div>
            `).join('')}
            <div class="summary-row" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e9ecef;">
              <span>Subtotal:</span>
              <span>₹${subtotal}</span>
            </div>
            <div class="summary-row">
              <span>Tax (18%):</span>
              <span>₹${tax}</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span>₹${total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Add form submit handler
  setTimeout(() => {
    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
  }, 100);
}

// Render Success Page
function renderSuccessPage() {
  const orderData = JSON.parse(sessionStorage.getItem('lastOrder') || '{}');
  
  document.getElementById('main-content').innerHTML = `
    <section class="success-section">
      <div class="container">
        <div class="success-icon">✅</div>
        <h1>Payment Successful!</h1>
        <p class="order-id">Order ID: ${orderData.orderId || 'N/A'}</p>
        
        <div class="order-details">
          <h3 style="margin-bottom: 16px;">Order Details</h3>
          <div class="summary-row">
            <span>Customer:</span>
            <span>${orderData.customerName || 'N/A'}</span>
          </div>
          <div class="summary-row">
            <span>Email:</span>
            <span>${orderData.customerEmail || 'N/A'}</span>
          </div>
          <div class="summary-row">
            <span>Order Date:</span>
            <span>${orderData.orderDate || 'N/A'}</span>
          </div>
          <div class="summary-row total">
            <span>Total Paid:</span>
            <span>₹${orderData.total || 0}</span>
          </div>
        </div>
        
        <button class="btn btn-primary" onclick="navigateTo('home')" style="padding: 16px 48px; font-size: 16px;">Continue Shopping</button>
      </div>
    </section>
  `;
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      emoji: product.emoji,
      image: product.image,
      price: product.price,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  showToast('✅ Added to cart!');
  
  // Navigate to cart after short delay
  setTimeout(() => {
    navigateTo('cart');
  }, 800);
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCurrentPage();
  showToast('❌ Removed from cart');
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartCount();
    renderCurrentPage();
  }
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Update Cart Count
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

// Navigate to Page
function navigateTo(page) {
  currentPage = page;
  renderCurrentPage();
  window.scrollTo(0, 0);
}

// Handle Checkout
function handleCheckout(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const payment = document.getElementById('payment').value;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  // Show payment modal
  const modal = document.getElementById('payment-modal');
  if (modal) {
    modal.classList.add('active');
  }

  // Simulate payment processing
  setTimeout(() => {
    const orderId = 'ORD' + Date.now();
    const orderDate = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    // Save order data
    sessionStorage.setItem('lastOrder', JSON.stringify({
      orderId,
      customerName: name,
      customerEmail: email,
      orderDate,
      total,
      items: cart
    }));

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();

    // Hide modal
    if (modal) {
      modal.classList.remove('active');
    }

    // Navigate to success page
    navigateTo('success');
  }, 2500);
}

// Show Toast Notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #28a745;
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 3000;
    animation: slideIn 0.3s ease;
    font-weight: 600;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// Close Payment Modal
document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.getElementById('close-payment-modal');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      const modal = document.getElementById('payment-modal');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  }
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}