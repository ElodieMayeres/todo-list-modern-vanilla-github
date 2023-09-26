export default class DB {

    static setApiURL (data) {
        this.apiURL = data;
    }
    
    static async findAll() {
        const reponse = await fetch(this.apiURL + "/tasks");
// /COMMENTAIRES/: return du tableau indexé.
        return await reponse.json();
        //A_FAIRE: trier les tâches pour que la dernière ajoutée soit au dessus. 
    }

    static async addOne(data){
 // /COMMENTAIRES/: ON a un await. Donc, il faut lui dire que c'est asynchrone.Concernant la méthode fetch, on lui envoie les éléments nécessaires: La méthode, le header,  le body. 
        const reponse = await fetch(this.apiURL + "/tasks", 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
// /NOTES/: On utilise la méthode POST. On envoie du JSON et on change cela en 'string'(chaînes de caractères). data correspond aux données qu'on doit lui envoyer (les todos). 
        });
        return await reponse.json();
}
}


// NOTES ET COMMENTAIRES : 
/*

*/