/**********************************************************************
 *  PREPARATION DE LA LISTE DES PRODUITS 
 * ********************************************************************/
let products = [
    {
        id : 1,
        nom: 'CHAISE CLASSIQUE - Art Object',
        image: 'https://images.unsplash.com/photo-1656386080035-494539b16898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 225,
        instock : 100
    },
    {
        id : 2,
        nom: 'POLO CINTRE SLIM FIT ',
        image: 'https://images.unsplash.com/photo-1665390856430-d962edb95ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 75,
        instock : 15
    },
    {
        id :3,
        nom: 'Ensemble Boucle - Chaussure',
        image: 'https://images.unsplash.com/photo-1583009820765-26fd63af8819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 50,
        instock : 15
    },
    {
        id :4,
        nom: 'SEIKO LUXE ORIGINAL',
        image: 'https://images.unsplash.com/photo-1661030420771-245b957d331c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 159,
        instock : 15
    },
    {
        id : 5,
        nom: 'Basket Adidas  New Look',
        image: 'https://images.unsplash.com/photo-1656944227421-416b1d2186c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 27,
        instock : 15
    },
    {
        id: 6,
        nom: 'Lunette VUE - Marc Jacobs',
        image: 'https://images.unsplash.com/photo-1658690299170-bf1c6f8e312f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 20,
        instock : 15
    },
    {
        id : 7,
        nom: 'CHAINE OR DIOR',
        image: 'https://images.unsplash.com/photo-1659708701940-e60893ef03d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 60,
        instock : 15
    },
    {
        id : 8,
        nom: 'UNDER ARMOUR BLITZING',
        image: 'https://images.unsplash.com/photo-1659458104812-f02fbf6c2263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 22,
        instock : 15
    }
];
        /******************************************************
        *                  TRAITEMENT DU PANIER               *
        ******************************************************/

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

// Declaration du panier à vide ou récupération du contenu via le localStorage
let panier = [] || JSON.parse(localStorage.getItem("PANIER"));

//Mise à jour du panier
updatePanier();
//console.log(panier);

//Fonction d'ajout produit dans le panier
function addToPanier(id) {
    // verification si le produit n'existe pas dans le panier
    if (panier.some((element) => element.id === id)) {

        //on augmente juste la quantité si le produit existe dèjà dans le panier
        changeQuantity("plus", id);
    } else {
        const element = products.find((produit) => produit.id === id);
        panier.push({
            ...element,
            quantite: 1,
        });
    }
    //rappelle de la fonction de mise à jour pour actualiser
    updatePanier();
}

//Mise à jour des valeurs des elements du panier et sauvegarde dans le localStorage
function updatePanier (){
    affichageElementsPanier();
    affichageSubtotal();

//sauvegarde des données du panier dans le local storage
 localStorage.setItem("PANIER", JSON.stringify(panier));
}

//Cacul et affichage du subtotal
function affichageSubtotal(){
    let totalPrix = 0,
    totalElements =0;

panier.forEach((element) => {
    totalPrix += element.prix * element.quantite;
    totalElements += element.quantite;
});
subtotal.innerHTML= `Subtotal (${totalElements} elements) : ${totalPrix.toFixed(2)} €)`;
totalElementsInPanier.innerHTML = totalElements;

}

// Affichage des elements du panier
function affichageElementsPanier(){
    panierElements.innerHTML = ""; // vider le panier
    panier.forEach((element) => {
    panierElements.innerHTML += `
    <div class="panier-element" id="produit${element.id}">
    <div class="element-info" >
        <h4>${element.nom}</h4>
    </div>
    <div class="unit-prix">
    ${element.prix}<small> €</small>
    </div>
    <div class="units">
        <div class="btn minus" onclick="changeQuantity('minus', ${element.id})">-</div>
        <div class="number">${element.quantite}</div>
        <div class="btn plus" onclick="changeQuantity('plus', ${element.id})">+</div>           
    </div>
    <div><button class="btn btn-danger" id=${element.id} onclick="removeElementFromPanier(${element.id})" type="button">Supprimmer</button></div>
    </div>
     ` ; });
  }

//Supprimer un element du apnier
function removeElementFromPanier(id){
   // panier = panier.filter((element)=> element.id !== id);
    panier.splice(id, 1); 
    console.log(id);
    $('#produit'+id).remove();
    //mise à jour du panier
    updatePanier();
}

//changement de la quantité 
function changeQuantity(action, id) {
    panier = panier.map((element) => {
let quantite = element.quantite;
if (element.id === id) {
    if (action === "minus" && quantite > 1) {
        quantite--;
    } else if(action == "plus" && quantite < element.instock) {
        quantite++;
    } 
} 
return {
    ...element,
    quantite,
};
    });
    updatePanier();
}
            /****************************************************************
            *     VALIDATION DE LA #ModalValidationCommande                 *
            *****************************************************************/
function finaliser() {
    // remplir les infos client
     $('#nomClient').html('<b> ' + $('#username').val() + '</b>')
     $('#prenomClient').html('<b> ' + $('#firstname').val() + '</b>')
     $('#telephoneClient').html('<b> ' + $('#telephone').val() + '</b>')
     $('#emailClient').html('<b> ' + $('#email').val() + '</b>')
     $('#addresseClient').html('<b> ' + $('#addresse').val() + '</b>')
     console.log('======== '+$('#addresse').val()+ ' ========')
     
     // remplir le panier :
     let listFinal = "";
     $("#listFinal").empty()
     var totalPrix = 0;
     panier.forEach(element => {
   
       listFinal += '<li class="list-group-item">';
       listFinal += '<div class="fw-bold">' + element.nom + '</div>';
       listFinal += ' <div class="row"> <div class="col-6">Prix unitaire :';
       listFinal += ' <b>' + element.prix + '€</b></div><div class="col-6"> ';
       listFinal += ' Quantité : <b>' + element.quantite + '</b></div></div></li>';
       totalPrix += element.prix * element.quantite;
   
     });
 
     $('#listFinal').append(listFinal);
     $('#totalPaye').html(totalPrix.toFixed(2)+ '€');
   }
   
   //FINALISER COMMANDE ET PAYER
   $(".finaliser").click(function () {
     document.location.href = "redirect.html"
   })