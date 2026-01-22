document.addEventListener("DOMContentLoaded", () => {

    const menuData = {
        pasta: [
            {
                name: "pasta red sauce",
                desc: "Rich and tangy tomato-based pasta with herbs.",
                price: "$  EGP",
                img: "pastaimgs/pastared.jpeg"
            },
            {
                name: "Pasta White Sauce",
                desc: "Creamy and cheesy pasta in a smooth white sauce.",
                price: "$  EGP",
                img: "pastaimgs/PastaWhiteSauce.jpeg"
            },
            {
                name: "Sweet and sour pasta",
                desc: "Tender pasta tossed in a sweet and tangy sauce.",
                price: "$  EGP",
                img: "pastaimgs/Sweetandsourpasta.jpeg"
            },
            {
                name: "Ranch sauce",
                desc: "Creamy pasta tossed in a flavorful ranch dressing with herbs.",
                price: "$  EGP",
                img: "pastaimgs/Ranchsauce.jpeg"
            },
            {
                name: "Flavor spot sauce",
                desc: "A special and unique taste.",
                price: "$ EGP",
                img: "pastaimgs/Flavorspotsauce.jpeg"
            },
           
        ],

        fries: [
            {
                name: "Classic Fries",
                desc: "Golden crispy fries.",
                price: "$  EGP",
                img: "friesimgs/ClassicFries.jpg"
            },
            {
                name: "Cheese Fries",
                desc: "Fries topped with melted cheese.",
                price: "$  EGP",
                img: "friesimgs/CheeseFries.jpg"
            },
            {
                name: "Loaded Fries",
                desc: "Cheese, beef & sauce.",
                price: "$  EGP",
                img: "friesimgs/LoadedFries.jpg"
            },
            
        ],

        desserts: [
            {
                name: "Chocolate Cake",
                desc: "Rich chocolate cake.",
                price: "$  EGP",
                img: "dessertimgs/ChocolateCake.jpg"
            },
            {
                name: "Cheesecake",
                desc: "Creamy cheesecake with sauce.",
                price: "$  EGP",
                img: "dessertimgs/Creamycheesecake.jpg"
            },
            {
                name: "Brownie",
                desc: "Fudgy chocolate brownie.",
                price: "$  EGP",
                img: "dessertimgs/Brownie.jpg"
            },
            {
                name: "Tiramisu",
                desc: "Classic Italian dessert.",
                price: "$  EGP",
                img: "dessertimgs/Tiramisu.jpg"
            },
            {
                name: "Ice Cream",
                desc: "Vanilla ice cream scoop.",
                price: "$  EGP",
                img: "dessertimgs/IceCream.jpg"
            },
            {
                name: "Panna Cotta",
                desc: "Soft creamy dessert.",
                price: "$  EGP",
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
