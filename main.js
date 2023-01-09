
const toys = [
    {
       id: 1,
       name: "Gameboy",
       maker: "Nintendo",
       purchased: true,
       price: 100,
   
   },
   
   {
       id: 2,
       name: "Cooking Everything",
       maker: "Bama Books",
       purchased: false,
       price: 30,
   
   },
   
   {
       id: 3,
       name: "Slingshot",
       maker: "Warner Toys",
       purchased: true,
       price: 5,
   
   },
   ]

for(toy of toys){
    console.log(toy.maker)
}

   // each toy or gift has a string property for the id, a string property for the name, a string property for the maker, a boolean proprty for purchased,
   // and an interger proprty for the price
   
   //forgot to add comma after each property in the variable and got hung up for a while; be exact !
   
   // the commas got me again when converting the toy variables into an array! have to place after each object in the array, after the }
   
   
   
