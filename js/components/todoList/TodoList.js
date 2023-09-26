
import DB from "../../DB";
import Todo from "../todo/Todo";
import getTemplate from './template.js'; 

export default class TodoList {
    constructor(data){
    // /COMMENTAIRES/: Configuration de l'URL de l'API en utilisant la méthode setApiURL du module DB
        DB.setApiURL(data.apiURL);
    // /COMMENTAIRES/:Sélection de l'élément DOM correspondant à l'élément spécifié dans data.domELT
        this.elt = document.querySelector(data.domELT);
        this.todos = [];
        this.newTodoInput = null; 
        this.loadTodos();   
    }
 
    // /COMMENTAIRES/: Fonction asynchrone pour charger les todos depuis la base de données
    async loadTodos() {
    // /COMMENTAIRES/: Appel asynchrone à la méthode findAll du module DB pour obtenir tous les todos. Après il mettra cela dans la constante todos. 
        const todos = await DB.findAll(); 
    // /COMMENTAIRES/: Transformation des données obtenues en instances de la classe Todo. (objet de type "Todo")
        this.todos = todos.map(todo => new Todo(todo));
        this.render();     
    }

// A_FAIRE: faire un rendu du template et du div contenant le .todo-list, le .new-todo et le .todo-count. 
    render (){
        this.elt.innerHTML= getTemplate(this) ; 
// /COMMENTAIRES/: Le .todo-list, le .new-todo et le .todo-count existent. 
        this.activateElements(); 
// /COMMENTAIRES/:Après ce élément, j'ai des éléments de le div. Donc, il faut activer ici. 
// /DEBUGGAGE/: J'ai du inverser les lignes pour que cela fonction et recopier le nom de la fonction. 
        this.renderNotCompletedTodosCount(); 

    }

// A_FAIRE: ajouter un décompte de tâches.  
    renderNotCompletedTodosCount (){
// /COMMENTAIRES/: Mettre le nombre dans l'innertext .todo-count strong 
       this.elt.querySelector('.todo-count strong').innerText =  this.todos.filter((todo)=>!todo.completed).length;  ; 
    }
    
// A_FAIRE: ajouter une nouvelle tâche. 
    activateElements() {
        this.newTodoInput =  this.elt.querySelector('.new-todo'); 
        this.newTodoInput.addEventListener('keyup', (e)=> {
            if (e.key ==='Enter' && this.newTodoInput.value !== ''){
                this.add(); 
            }
// /COMMENTAIRES/: On utilise un fonction fléchée parce que le mot clé this n'existe pas et donc, le this est celui qu'on utilise avant. 
        });
    }

    add () {      
    //  /ETAPES/: ajouter la todo dans le this.todos. 
    const todoData = 
        {
            id: new Date(), 
            content: this.newTodoInput.value, 
            completed: false
        }; 
    
    const newTodo =  new Todo(todoData )
      this.todos.unshift(newTodo);  
    
    //  /ETAPES/: ajout de la todo dans le DOM 
    const newTodoElement = document.createElement('div'); 
    document.querySelector('.todo-list').insertBefore(newTodoElement, document.querySelector('.todo-list').children[0]); 
    // /COMMENTAIRES/: éléments, puis où le placer. 
    newTodoElement.outerHTML = newTodo.render();  

    //  /ETAPES/: ajout de la todo dans l'API
    // on doit aller dans la db
    DB.addOne(todoData);
    this.newTodoInput.value = '';
    this.renderNotCompletedTodosCount(); 
    }
}
    
// NOTES ET COMMENTAIRES : 
/*
DB.setApiURL(data.apiURL)
/NOTES/:DB => classe DB dans le fichier DB.js, objet 
/NOTES/:setApiURL => methode à la quelle on envoie des informations 

this.todos = todos.map(todo => new Todo(todo));
 /NOTES/: la méthode .map() est utilisée pour transformer un tableau d'objets en un nouveau tableau en appliquant une fonction à chaque élément de l'original.

 /NOTES/: this.todos = todos.map(todo => new Todo(todo));, utilise la méthode .map() pour parcourir chaque élément du tableau todos.
 
 /NOTES/:La fonction fléchée todo => new Todo(todo) est appliquée à chaque élément todo du tableau todos. 

 /NOTES/: Cette fonction crée une nouvelle instance de la classe Todo en utilisant l'élément todo actuel comme argument du constructeur.
 
 /NOTES/: Le résultat de .map() est un nouveau tableau contenant les nouvelles instances de la classe Todo. Ce nouveau tableau est ensuite assigné à la propriété this.todos de l'instance de la classe TodoList.

//  /ETAPES/: ajout de la todo dans le DOM 
this.elt.querySelector('.todo-list').innerHTML= 
newTodo.render() + this.elt.querySelector('.todo-list').innerHTML; 
 /NOTES/: ON a fait comme cela initiallement, mais ce n'est pas une bonne pratique. C'est métaphoriquement comme si on voulait ajouter une nouvelle bûche à un tas, mais qu'on enlevait toutes les autres bûches avant de tout remettre. 


*/
