
import '../style.scss';
import TodoList from './components/todoList/TodoList.js';


new TodoList ({
    apiURL: "https://6347f663db76843976b6e385.mockapi.io",
    domELT: "#app"
});


/*
Initialise l'application 
// Instancier une nouvelle TodoList (créer une occurence, nouvelle objet)
// Création d'un objet. 
// Le nom de l'objet du DOM sur leque je vais le pluger /en lui envoyant l'élément DOM sur lequel se greffer
// et l'URL de l'API à utiliser: https://6347f663db76843976b6e385.mockapi.io/

/NOTES/:C'est quoi un component ? 
/NOTES/:-une entité fonctionnelle et autonome. objet réutilisable. chaque objet/ composant à sa couche logique, son HTLM... 

/NOTES/:STORE = 
/NOTES/:Centralisation des données. 
/NOTES/:Données accessibles par tous les composants. 
*/