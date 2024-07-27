// Function to fetch and display menu items
async function getMenu() {
    try {
        let response = await fetch('menu.json'); // Ensure this path is correct
        let menuItems = await response.json();
        displayMenu(menuItems);
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

// Function to display menu items
function displayMenu(items) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
        `;
        menu.appendChild(menuItem);
    });
}

// Function to take order
function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const burgers = ['Burger 1', 'Burger 2', 'Burger 3', 'Burger 4', 'Burger 5'];
            const order = {
                items: burgers.sort(() => 0.5 - Math.random()).slice(0, 3)
            };
            resolve(order);
        }, 2500);
    });
}

// Function to prepare order
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Function to pay order
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Function to thank the customer
function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

// Function to handle the complete order process
async function handleOrder() {
    try {
        const order = await takeOrder();
        console.log('Order:', order);
        const prep = await orderPrep();
        console.log('Order Prep:', prep);
        const payment = await payOrder();
        console.log('Payment:', payment);
        if (payment.paid) {
            thankyouFnc();
        }
    } catch (error) {
        console.error('Error handling order:', error);
    }
}

