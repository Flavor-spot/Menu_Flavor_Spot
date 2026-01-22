document.addEventListener("DOMContentLoaded", () => {

    const menuData = {
        pasta: [
            {
                name: "pasta red sauce",
                desc: "Rich and tangy tomato-based pasta with herbs.",
                price: "120 EGP",
                img: "pastaimgs/pastared.jpeg"
            },
            {
                name: "Pasta White Sauce",
                desc: "Creamy and cheesy pasta in a smooth white sauce.",
                price: "100 EGP",
                img: "pastaimgs/PastaWhiteSauce.jpeg"
            },
            {
                name: "Sweet and sour pasta",
                desc: "Tender pasta tossed in a sweet and tangy sauce.",
                price: "135 EGP",
                img: "pastaimgs/Sweetandsourpasta.jpeg"
            },
            {
                name: "Lasagna",
                desc: "Layers of pasta, meat and cheese.",
                price: "150 EGP",
                img: "pastaimgs/Lasagna.jpg"
            },
            {
                name: "Pesto Pasta",
                desc: "Basil pesto with cherry tomatoes.",
                price: "110 EGP",
                img: "pastaimgs/PestoPasta.jpg"
            },
           
        ],

        fries: [
            {
                name: "Classic Fries",
                desc: "Golden crispy fries.",
                price: "60 EGP",
                img: "friesimgs/ClassicFries.jpg"
            },
            {
                name: "Cheese Fries",
                desc: "Fries topped with melted cheese.",
                price: "80 EGP",
                img: "friesimgs/CheeseFries.jpg"
            },
            {
                name: "Loaded Fries",
                desc: "Cheese, beef & sauce.",
                price: "95 EGP",
                img: "friesimgs/LoadedFries.jpg"
            },
            
        ],

        desserts: [
            {
                name: "Chocolate Cake",
                desc: "Rich chocolate cake.",
                price: "85 EGP",
                img: "dessertimgs/ChocolateCake.jpg"
            },
            {
                name: "Cheesecake",
                desc: "Creamy cheesecake with sauce.",
                price: "80 EGP",
                img: "dessertimgs/Creamycheesecake.jpg"
            },
            {
                name: "Brownie",
                desc: "Fudgy chocolate brownie.",
                price: "60 EGP",
                img: "dessertimgs/Brownie.jpg"
            },
            {
                name: "Tiramisu",
                desc: "Classic Italian dessert.",
                price: "90 EGP",
                img: "dessertimgs/Tiramisu.jpg"
            },
            {
                name: "Ice Cream",
                desc: "Vanilla ice cream scoop.",
                price: "45 EGP",
                img: "dessertimgs/IceCream.jpg"
            },
            {
                name: "Panna Cotta",
                desc: "Soft creamy dessert.",
                price: "85 EGP",
                img: "dessertimgs/PannaCotta.jpg"
            }
        ]
    };

    const loadingScreen = document.getElementById("loading-screen");
    const mainMenu = document.getElementById("main-menu");
    const tabs = document.querySelectorAll(".tab");
    const menuGrid = document.querySelector(".menu-grid");

    function renderMenu(category) {
        menuGrid.classList.add("fade-out");

        setTimeout(() => {
            menuGrid.innerHTML = "";

            menuData[category].forEach(item => {
                const div = document.createElement("div");
                div.className = "menu-item";
                div.innerHTML = `
                <img src="${item.img}" loading="lazy">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <span class="price">${item.price}</span>
                </div>
            `;
                menuGrid.appendChild(div);
            });

            menuGrid.classList.remove("fade-out");
        }, 300);
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
