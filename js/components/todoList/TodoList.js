// classe TodoList 
/*
propriétés : 
elt 
todo 
*/

import DB from "../../DB";
import Todo from "../todo/Todo";
import getTemplate from './template.js'; 

export default class TodoList {
    constructor(data){
    // Configuration de l'URL de l'API en utilisant la méthode setApiURL du module DB
        DB.setApiURL(data.apiURL);
    // Sélection de l'élément DOM correspondant à l'élément spécifié dans data.domELT
        this.elt = document.querySelector(data.domELT);
        this.todos = [];
        this.loadTodos();   
    }
    // Fonction asynchrone pour charger les todos depuis la base de données
    async loadTodos() {
    // Appel asynchrone à la méthode findAll du module DB pour obtenir tous les todos. Après il mettra cela dans la constante todos. 
        const todos = await DB.findAll(); 
    // Transformation des données obtenues en instances de la classe Todo
        this.todos = todos.map(todo => new Todo(todo));
        this.render();     
    }
    render (){
        this.elt.innerHTML= getTemplate(this) ; 
        this.renderNotCompletedTodosCount(); 
    }
    renderNotCompletedTodosCount (){
       // Mettre le nombre dans l'innertext .todo-count strong 
       this.elt.querySelector('.todo-count strong').innerText =  this.todos.filter((todo)=>!todo.completed).length;  ; 
    }
}

// NOTES ET COMMENTAIRES : 
/*
DB.setApiURL(data.apiURL)
DB => classe DB dans le fichier DB.js, objet 
setApiURL => methode à la quelle on envoie des informations 

 la méthode .map() est utilisée pour transformer un tableau d'objets en un nouveau tableau en appliquant une fonction à chaque élément de l'original.
 this.todos = todos.map(todo => new Todo(todo));, utilise la méthode .map() pour parcourir chaque élément du tableau todos.
 
 La fonction fléchée todo => new Todo(todo) est appliquée à chaque élément todo du tableau todos. 
 Cette fonction crée une nouvelle instance de la classe Todo en utilisant l'élément todo actuel comme argument du constructeur.
 
 Le résultat de .map() est un nouveau tableau contenant les nouvelles instances de la classe Todo. Ce nouveau tableau est ensuite assigné à la propriété this.todos de l'instance de la classe TodoList.

 this.todos.forEach((todo)=>{
            todo.render(document.querySelector(".todo-list")); 
        }); 
*/