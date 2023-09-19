// classe TodoList 
/*
propriétés : 
elt 
todo 
*/

import DB from "../../DB";
import Todo from "../todo/Todo";

export default class TodoList {
    constructor(data){
        DB.setApiURL(data.apiURL);
        this.elt = document.querySelector(data.domELT);
        this.todos = [];
        this.loadTodos();   
    }
    
    async loadTodos() {
        const todos = await DB.findAll(); 
        this.todos = todos.map(todo => new Todo(todo));
        this.render();     
    }
    render (){
        console.table(this.todos); 
    }
}

// NOTES ET COMMENTAIRES : 
/*
DB.setApiURL(data.apiURL)
DB => classe DB dans le fichier DB.js, objet 
setApiURL => methode à la quelle on envoie des informations 


*/