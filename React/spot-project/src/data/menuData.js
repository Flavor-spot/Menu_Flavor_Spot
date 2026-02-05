export const menuData = {
  pasta: [
    {
      name: "pasta red sauce",
      desc: "Rich and tangy tomato-based pasta with herbs.",
      price: 40,
      img: "pastaimgs/pastared.jpeg",
      proteinOptions: [
        { name: "Chicken", price: 50, img: "extra_pasta_red_sauce/Chicken.jpeg", label: "Chicken Pasta" },
        { name: "Beef", price: 50, img: "extra_pasta_red_sauce/Beef.jpeg", label: "Beef Pasta" },
        { name: "Shrimp", price: 80, img: "extra_pasta_red_sauce/Shrimp.jpeg", label: "Shrimp Pasta" },
        { name: "None", price: 0, img: null, label: null }
      ]
    },
    {
      name: "Pasta White Sauce",
      desc: "Creamy and cheesy pasta in a smooth white sauce.",
      price: 55,
      img: "pastaimgs/PastaWhiteSauce.jpeg",
      badge: "best",
      proteinOptions: [
        { name: "Chicken", price: 50, img: "extra_Pasta_white_sauce/Chicken.jpeg", label: "Chicken Pasta" },
        { name: "Beef", price: 50, img: "extra_Pasta_white_sauce/Beef.jpeg", label: "Beef Pasta" },
        { name: "Shrimp", price: 80, img: "extra_Pasta_white_sauce/Shrimp.jpeg", label: "Shrimp Pasta" },
        { name: "None", price: 0, img: null, label: null }
      ]
    },
    {
      name: "Sweet and sour pasta",
      desc: "Tender pasta tossed in a sweet and tangy sauce.",
      price: 65,
      img: "pastaimgs/Sweetandsourpasta.jpeg",
      badge: "favorite",
      proteinOptions: [
        { name: "Chicken", price: 50, img: "extra_sweet_and_sour_pasta/Chicken.jpeg", label: "Chicken Pasta" },
        { name: "Beef", price: 50, img: "extra_sweet_and_sour_pasta/Beef.jpeg", label: "Beef Pasta" },
        { name: "Shrimp", price: 80, img: "extra_sweet_and_sour_pasta/Shrimp.jpeg", label: "Shrimp Pasta" },
        { name: "None", price: 0, img: null, label: null }
      ]
    },
    {
      name: "Ranch sauce",
      desc: "Creamy pasta tossed in a flavorful ranch dressing with herbs.",
      price: 75,
      img: "pastaimgs/Ranchsauce.jpeg",
      proteinOptions: [
        { name: "Chicken", price: 50, img: "extra_ranch_sauce/Chicken.jpeg", label: "Chicken Pasta" },
        { name: "Beef", price: 50, img: "extra_ranch_sauce/Beef.jpeg", label: "Beef Pasta" },
        { name: "Shrimp", price: 80, img: "extra_ranch_sauce/Shrimp.jpeg", label: "Shrimp Pasta" },
        { name: "None", price: 0, img: null, label: null }
      ]
    },
    {
      name: "Flavor spot sauce",
      desc: "A special and unique taste.",
      price: 85,
      img: "pastaimgs/Flavorspotsauce.jpeg",
      proteinOptions: [
        { name: "Chicken", price: 50, img: "extra_flavor_spot_sauce/Chicken.jpeg", label: "Chicken Pasta" },
        { name: "Beef", price: 50, img: "extra_flavor_spot_sauce/Beef.jpeg", label: "Beef Pasta" },
        { name: "Shrimp", price: 80, img: "extra_flavor_spot_sauce/Shrimp.jpeg", label: "Shrimp Pasta" },
        { name: "None", price: 0, img: null, label: null }
      ]
    }
  ],

  fries: [
    { name: "Classic Fries", desc: "Golden crispy fries.", price: 25, img: "friesimgs/ClassicFries.jpeg", badge: "best" },
    { name: "Crispy Onion", desc: "Golden and crunchy onions, perfect as a topping or snack.", price: 35, img: "friesimgs/CrispyOnion.jpeg", badge: "favorite" },
    { name: "Spicy Fries", desc: "Hot and flavorful potatoes with a spicy kick.", price: 40, img: "friesimgs/SpicyFries.jpeg" }
  ],

  desserts: [
    { name: "Churros", desc: "Crispy churros served with your choice of chocolate sauce.", price: 60, img: "dessertimgs/Churros.jpeg", badge: "new" },
    { name: "Chocolate Bomboloni", desc: "Soft bomboloni filled with warm melted chocolate.", price: 75, img: "dessertimgs/ChocolateBomboloni.jpeg", badge: "best" },
    { name: "Brownie", desc: "Fudgy chocolate brownie.", price: 80, img: "dessertimgs/Brownie.jpg" },
    { name: "Tiramisu", desc: "Classic Italian dessert.", price: 85, img: "dessertimgs/Tiramisu.jpg" },
    { name: "Ice Cream", desc: "Vanilla ice cream scoop.", price: 95, img: "dessertimgs/IceCream.jpg" },
    { name: "Panna Cotta", desc: "Soft creamy dessert.", price: 105, img: "dessertimgs/PannaCotta.jpg" }
  ]
};
