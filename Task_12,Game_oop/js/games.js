import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
    constructor() {
        document.querySelectorAll(".navbar .nav-item .nav-link").forEach( (element) => {
            element.addEventListener("click" , () => {
                this.startUp(this.getActiveElement(element))
            })
        })

        this.ui = new Ui();

        this.startUp();
    }

    getActiveElement(e) {
        let linkActive = document.querySelector(".navbar .active");
        linkActive.classList.remove("active");
        e.classList.add("active");

        let category = e.dataset.category;
        return category;
    }

    async getGames(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '31cc7c04ccmsh56f676b2d19393cp18e1edjsnc747f1d5ecc7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const gamesResponse = await fetch(url, options);
        const gamesData = await gamesResponse.json();
        return gamesData;
    }

    async startUp(category = "mmorpg") {
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        loading.classList.add("d-block");
        let gamesData = await this.getGames(category);
        loading.classList.remove("d-block");
        loading.classList.add("d-none");
        this.ui.displayGames(gamesData);

        let itemsContainer = document.querySelector(".games .display-games .all-items");
        let sectionGames = document.querySelector("section.games");
        let sectionDetails = document.querySelector("section.details");
        itemsContainer.addEventListener("click" , function(e) {
            if(e.target.closest(".item")) {
                let id = e.target.closest(".item").dataset.id;
                sectionGames.classList.replace("d-block" , "d-none");
                sectionDetails.classList.replace("d-none" , "d-block");
                let details = new Details(id);
            }
        })

    }
}