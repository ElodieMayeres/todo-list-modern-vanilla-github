import getTemplatetodo from './template'
export default class Todo {
constructor(data){
    this.id = data.id; 
    this.content = data.content; 
    this.completed = data.completed; 
    this.createdAt = data.createdAt; 

    }
    render (){
      return getTemplatetodo(this);  
      // /COMMENTAIRES/:return de son template qui est le li.   
    }
} ; 

// NOTES ET COMMENTAIRES : 
/* 
/COMMENTAIRES/: Définition de la classe Todo
  export default class Todo {
    Constructeur de la classe,
    argument "data" qui est supposé être un objet contenant les propriétés d'une tâche à faire.
    constructor(data) {
    Initialisation de la propriété "id" avec la valeur de "data.id"
      this.id = data.id;
      // Initialisation de la propriété "content" avec la valeur de "data.content"
      this.content = data.content;
      // Initialisation de la propriété "completed" avec la valeur de "data.completed"
      this.completed = data.completed;
      // Initialisation de la propriété "createdAt" avec la valeur de "data.createdAt"
      this.createdAt = data.createdAt;
  }
}

*/