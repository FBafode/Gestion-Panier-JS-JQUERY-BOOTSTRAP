/******************* PREPARATION DE LA LISTE DES PRODUITS **********************$***********/
let products = [
    {
        id : 1,
        nom: 'Blouson Cuir Homme OSX',
        image: 'https://s1.rockagogostatic.com/ref/pls/pls15/blouson-cuir-mec-marque-osx-brando-jacket-pr.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 225,
        instock : 100
    },
    {
        id : 2,
        nom: 'POLO CINTRE SLIM FIT ',
        image: 'https://www.cdiscount.com/pdt2/1/7/8/1/700x700/mp59790178/rw/tee-shirt-homme-imprime-col-arrondi-manches-courte.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 75,
        instock : 15
    },
    {
        id :3,
        nom: 'Robe rose croisée à boucler',
        image: 'https://www.cdiscount.com/pdt2/1/8/0/1/700x700/mp54405180/rw/sky-femmes-vintage-automne-hiver-manches-longues-d.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 50,
        instock : 15
    },
    {
        id :4,
        nom: 'Sneakers Adidas Original',
        image: 'https://www.kiffoo.com/7220-large_default/basket-adidas-original-homme.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 159,
        instock : 15
    },
    {
        id : 5,
        nom: 'Pantalon jogging Nike',
        image: 'https://images.unsplash.com/photo-1673038099756-0e056130b7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 27,
        instock : 15
    },
    {
        id: 6,
        nom: 'Sportwear Femme Gris',
        image: 'https://contents.mediadecathlon.com/p1691566/k$863fad91e6bb4a2de8373ca10dfc3a53/sq/sous-vetements-thermique.jpg?format=auto&f=800x0',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 20,
        instock : 15
    },
    {
        id : 7,
        nom: 'Doudoune Rouge Homme',
        image: 'https://www.cdiscount.com/pdt2/2/7/7/1/700x700/mp40057277/rw/doudoune-rouge-homme-marque-duvet-de-canard-blanc.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 60,
        instock : 15
    },
    {
        id : 8,
        nom: 'UNDER ARMOUR BLITZING',
        image: 'https://images.unsplash.com/photo-1648931851212-3020920ba36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 22,
        instock : 15
    }
];
/****************************************************************************
 * TRAITEMENT DU PANIER
 * ************************************************************************** */

// SELECTION DES  ELEMENTS
const produits = document.querySelector(".produits");
const panierElements = document.querySelector(".panier-elements");
const subtotal = document.querySelector(".subtotal");
const totalElementsInPanier = document.querySelector(".total-elements-in-panier");

//Fonction d'affichage des produits
function affichageProduits() {
    products.forEach((produit) => {
    produits.innerHTML +=`
    <div class="card col-md-3 element" style="width: 23rem; margin: 10px">
   <img src="${produit.image}" class="card-img-top" alt="...">
     <div class="card-body element-container">
     <h3 class="card-title"> ${produit.nom}</h5>
     <p class='card-text'>"${produit.description}</p>
     <h4 class='card-text'>${produit.prix}  €</h4>
     <a   onclick="addToPanier(${produit.id})" class='btn btn-primary add-to-panier' id="${produit.id}" >Ajouter au panier</a>
     </div></div>
     `;
});    
}
//appelle de la focntion pour l'affichage
affichageProduits();