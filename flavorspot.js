 document.addEventListener("DOMContentLoaded", () => {

    const menuData = {
    pasta: [
        {
            name: "Spaghetti Carbonara",
            desc: "Creamy pasta with bacon and eggs.",
            price: "120 EGP",
            img: "img/SpaghettiCarbonara.jpg"
        },
        {
            name: "Penne Arrabbiata",
            desc: "Spicy tomato sauce with penne.",
            price: "100 EGP",
            img: "img/penne-arrabbiata.jpg"
        },
        {
            name: "Fettuccine Alfredo",
            desc: "Rich cream sauce with chicken.",
            price: "135 EGP",
            img: "img/fettuccine-alfredo.jpg"
        },
        {
            name: "Lasagna",
            desc: "Layers of pasta, meat and cheese.",
            price: "150 EGP",
            img: "img/lasagna.jpg"
        },
        {
            name: "Pesto Pasta",
            desc: "Basil pesto with cherry tomatoes.",
            price: "110 EGP",
            img: "img/pesto-pasta.jpg"
        },
        {
            name: "Mac & Cheese",
            desc: "Cheesy comfort pasta.",
            price: "95 EGP",
            img: "img/mac-and-cheese.jpg"
        }
    ],

    fries: [
        {
            name: "Classic Fries",
            desc: "Golden crispy fries.",
            price: "60 EGP",
            img: "img/classic-fries.jpg"
        },
        {
            name: "Cheese Fries",
            desc: "Fries topped with melted cheese.",
            price: "80 EGP",
            img: "img/cheese-fries.jpg"
        },
        {
            name: "Loaded Fries",
            desc: "Cheese, beef & sauce.",
            price: "95 EGP",
            img: "img/loaded-fries.jpg"
        },
        {
            name: "Garlic Fries",
            desc: "Fries with garlic butter.",
            price: "70 EGP",
            img: "img/garlic-fries.jpg"
        },
        {
            name: "Spicy Fries",
            desc: "Fries with spicy seasoning.",
            price: "65 EGP",
            img: "img/spicy-fries.jpg"
        },
        {
            name: "Truffle Fries",
            desc: "Premium truffle flavor.",
            price: "110 EGP",
            img: "img/truffle-fries.jpg"
        }
    ],

    desserts: [
        {
            name: "Chocolate Cake",
            desc: "Rich chocolate cake.",
            price: "85 EGP",
            img: "img/chocolate-cake.jpg"
        },
        {
            name: "Cheesecake",
            desc: "Creamy cheesecake with sauce.",
            price: "80 EGP",
            img: "img/cheesecake.jpg"
        },
        {
            name: "Brownie",
            desc: "Fudgy chocolate brownie.",
            price: "60 EGP",
            img: "img/brownie.jpg"
        },
        {
            name: "Tiramisu",
            desc: "Classic Italian dessert.",
            price: "90 EGP",
            img: "img/tiramisu.jpg"
        },
        {
            name: "Ice Cream",
            desc: "Vanilla ice cream scoop.",
            price: "45 EGP",
            img: "img/ice-cream.jpg"
        },
        {
            name: "Panna Cotta",
            desc: "Soft creamy dessert.",
            price: "85 EGP",
            img: "img/panna-cotta.jpg"
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
