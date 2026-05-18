
// role : questionner l'API
// parametre: 
// retour : 
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(data=>{
                console.log(data)
                afficheProduit(data)
            })

            


function afficheProduit(tableauProduit){

    tableauProduit.forEach(produit => {
        
        let produitCard = `
        <div class="flex space-between align-center  card large-48">
            <img src="${produit.image}" alt="" class="border-radius-15 w-15 ml-10">
            <div class="w-50 m-10">
                <h2 class="font-12">${produit.title}</h2>
                <p>${produit.category}</p>
                <p>${produit.rating.rate}</p>
            </div>
            <h3 class="w-15">${produit.price} €</h3>
        </div>
        
        
        
        `
        document.querySelector("#product-container").innerHTML+= produitCard;
        
    });
}