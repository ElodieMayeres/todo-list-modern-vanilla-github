import './styles.scss';
export default function(data) {
    return `
        <section class="todoapp">
          <header class="header">
            <h1>todos</h1>
            <input
              class="new-todo"
              placeholder="What needs to be done?"
              autofocus
            />
          </header>
          <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${data.todos.map(todo=>todo.render()).join('')}
            </ul>
          </section>
          <footer class="footer">
            <span class="todo-count">
            <strong>
            
            </strong> 
            
            item(s) left</span>
            <ul class="filters">
              <li>
                <a href="#/" class="selected">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button class="clear-completed">Clear completed</button>
          </footer>
        </section>
        <footer class="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a>
          </p>
          <p>
            Refactored by
            <a href="https://github.com/cburgmer">Christoph Burgmer</a>
          </p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    `;
};

// NOTES ET COMMENTAIRES : 
/*
${data.todos.map(todo=>todo.render()).join('')}
// 'data.todos' est supposé être un tableau contenant des éléments à traiter.
// La méthode 'map()' applique la fonction 'todo => todo.render()' à chaque élément du tableau.
.map(todo => todo.render()) : Cette partie de la ligne utilise la méthode map() sur le tableau data.todos. La méthode map() prend une fonction callback en argument et l'applique à chaque élément du tableau. Dans ce cas, la fonction de callback todo => todo.render() est utilisée. Cela signifie que pour chaque élément todo dans le tableau data.todos, la méthode render() est appelée sur cet élément. La méthode render() semble être une fonction ou une méthode définie sur les objets todo pour générer une représentation sous forme de chaîne de caractères de chaque élément.
// La méthode 'join('')' concatène les chaînes de caractères résultantes sans séparateur.
*/