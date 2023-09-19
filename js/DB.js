export default class {

    static setApiURL (data) {
        this.apiURL = data;
    }
    
    static async findAll() {
        const reponse = await fetch(this.apiURL + "/tasks");
        return await reponse.json();
    }
}


// NOTES ET COMMENTAIRES : 
/*
static setApiUrl (data)


this.apiURL =data; 
concernant l'


*/