document.addEventListener("DOMContentLoaded", () => {

    const menuData = {
        pasta: [
            { name: "pasta red sauce", desc: "Rich and tangy tomato-based pasta with herbs.", price: "40 EGP", img: "pastaimgs/pastared.jpeg" },
            { name: "Pasta White Sauce", desc: "Creamy and cheesy pasta in a smooth white sauce.", price: "55 EGP", img: "pastaimgs/PastaWhiteSauce.jpeg", badge: "best" },
            { name: "Sweet and sour pasta", desc: "Tender pasta tossed in a sweet and tangy sauce.", price: "65 EGP", img: "pastaimgs/Sweetandsourpasta.jpeg", badge: "favorite" },
            { name: "Ranch sauce", desc: "Creamy pasta tossed in a flavorful ranch dressing with herbs.", price: "75 EGP", img: "pastaimgs/Ranchsauce.jpeg" },
            { name: "Flavor spot sauce", desc: "A special and unique taste.", price: "85 EGP", img: "pastaimgs/Flavorspotsauce.jpeg" }
        ],
        fries: [
            { name: "Classic Fries", desc: "Golden crispy fries.", price: "25 EGP", img: "friesimgs/ClassicFries.jpeg", badge: "best" },
            { name: "Crispy Onion", desc: "Golden and crunchy onions, perfect as a topping or snack.", price: "35 EGP", img: "friesimgs/CrispyOnion.jpeg", badge: "favorite" },
            { name: "Spicy Fries", desc: "Hot and flavorful potatoes with a spicy kick.", price: "40 EGP", img: "friesimgs/SpicyFries.jpeg" }
        ],
        desserts: [
            { name: "Churros", desc: "Crispy churros served with your choice of chocolate sauce.", price: "60 EGP", img: "dessertimgs/Churros.jpeg", badge: "new" },
            { name: "Chocolate Bomboloni", desc: "Soft bomboloni filled with warm melted chocolate.", price: "75 EGP", img: "dessertimgs/ChocolateBomboloni.jpeg", badge: "best" },
            { name: "Brownie", desc: "Fudgy chocolate brownie.", price: "80 EGP", img: "dessertimgs/Brownie.jpg" },
            { name: "Tiramisu", desc: "Classic Italian dessert.", price: "85 EGP", img: "dessertimgs/Tiramisu.jpg" },
            { name: "Ice Cream", desc: "Vanilla ice cream scoop.", price: "95 EGP", img: "dessertimgs/IceCream.jpg" },
            { name: "Panna Cotta", desc: "Soft creamy dessert.", price: "105 EGP", img: "dessertimgs/PannaCotta.jpg" }
        ]
    };

    // بروتين الباستا
    const pastaProteins = [
        { name: "Chicken", price: 50 },
        { name: "Beef", price: 50 },
        { name: "Shrimp", price: 80 },
        { name: "None", price: 0 }
    ];

    // صوصات البطاطس
    const friesSauces = [
        { name: "Ketchup", price: 5 },
        { name: "Cheese", price: 10 },
        { name: "Garlic Mayo", price: 8 },
        { name: "None", price: 0 }
    ];

    const loadingScreen = document.getElementById("loading-screen");
    const mainMenu = document.getElementById("main-menu");
    const tabs = document.querySelectorAll(".tab");
    const menuGrid = document.querySelector(".menu-grid");

    function getBadgeContent(type) {
        if (type === "best") return `<i class="fa-solid fa-crown"></i> Best Seller`;
        if (type === "favorite") return `<i class="fa-solid fa-star"></i> Customer Favorite`;
        if (type === "new") return `<i class="fa-solid fa-bolt"></i> New`;
    }

    function renderMenu(category) {
        menuGrid.classList.add("fade-out");

        setTimeout(() => {
            menuGrid.innerHTML = "";

            menuData[category].forEach(item => {
                const div = document.createElement("div");
                div.className = "menu-item";

                // تحديد هل نضيف زرار
                let buttonHTML = "";
                if(category === "pasta" || category === "fries") {
                    buttonHTML = `<button class="protein-btn" style="display:block; margin:0 auto; padding:0.5rem 1rem; border:none; border-radius:5px; background:#ffd700; color:#000; cursor:pointer;">
                        ${category === "pasta" ? "Choose Your Protein" : "Choose Your Sauce"}
                    </button>`;
                }

                div.innerHTML = `
<div class="img-wrapper">
   ${item.badge ? `<span class="badge ${item.badge}">${getBadgeContent(item.badge)}</span>` : ""}
    <img src="${item.img}" alt="${item.name}" loading="lazy">
</div>

<div class="menu-item-content">
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <span class="price" style="display:block; text-align:center; margin: 0.5rem 0;" data-base-price="${parseInt(item.price.replace(/\D/g,'')) || 0}">${item.price}</span>
    ${buttonHTML}
</div>
`;
                menuGrid.appendChild(div);

                const btn = div.querySelector(".protein-btn");
                const priceSpan = div.querySelector(".price");
                let selectedPrice = 0;

                if(btn){
                    btn.addEventListener("click", () => {
                        if(category === "pasta") {
                            openSelectionModal(priceSpan, pastaProteins, selectedPrice, newPrice => selectedPrice = newPrice);
                        } else if(category === "fries") {
                            openSelectionModal(priceSpan, friesSauces, selectedPrice, newPrice => selectedPrice = newPrice);
                        }
                    });
                }
            });

            menuGrid.classList.remove("fade-out");
        }, 300);
    }

    const modal = document.getElementById("protein-modal");
    let currentPriceSpan;

    function openSelectionModal(priceSpan, options, savedPrice, callback){
        currentPriceSpan = priceSpan;
        modal.style.display = "block";

        const modalContent = modal.querySelector(".modal-content");
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h3>Select</h3>
            ${options.map(opt => `<label>
                <input type="radio" name="option" class="option-input" data-price="${opt.price}">${opt.name} (+${opt.price} EGP)
            </label>`).join("")}
            <div id="option-price-display">Extra: ${savedPrice} EGP</div>
            <button id="add-option-btn">Add</button>
        `;

        const optionButtons = modalContent.querySelectorAll(".option-input");
        const display = modalContent.querySelector("#option-price-display");
        const addBtn = modalContent.querySelector("#add-option-btn");
        const closeBtn = modalContent.querySelector(".close");

        if(savedPrice){
            optionButtons.forEach(btn => {
                if(parseInt(btn.dataset.price) === savedPrice){
                    btn.checked = true;
                    display.textContent = `Extra: ${savedPrice} EGP`;
                }
            });
        }

        optionButtons.forEach(btn => {
            btn.onchange = () => display.textContent = `Extra: ${btn.dataset.price} EGP`;
        });

        addBtn.onclick = () => {
            const selected = modalContent.querySelector(".option-input:checked");
            const basePrice = parseInt(currentPriceSpan.dataset.basePrice) || 0;
            const addedPrice = selected ? parseInt(selected.dataset.price) : 0;
            currentPriceSpan.textContent = `${basePrice + addedPrice} EGP`;
            modal.style.display = "none";
            callback(addedPrice);
        };

        closeBtn.onclick = () => modal.style.display = "none";
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderMenu(tab.dataset.category);
        });
    });

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainMenu.classList.remove("hidden");
        mainMenu.classList.add("show");
        renderMenu("pasta");
    }, 2500);

});
