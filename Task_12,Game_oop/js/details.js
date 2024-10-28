import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        this.closeDetails();
        this.clickDetails(id)
    }

    closeDetails() {
        let closeBtn = document.getElementById("closeBtn");
        let sectionGames = document.querySelector("section.games");
        let sectionDetails = document.querySelector("section.details");
        closeBtn.addEventListener("click" , function() {
            sectionGames.classList.replace("d-none" , "d-block");
            sectionDetails.classList.replace("d-block" , "d-none");
        })
    }

    async getDetails(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '31cc7c04ccmsh56f676b2d19393cp18e1edjsnc747f1d5ecc7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const detailsData = await response.json();
        return detailsData;
    }

    async clickDetails(id = 582) {
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        loading.classList.add("d-block");
        let detailsData = await this.getDetails(id);
        loading.classList.remove("d-block");
        loading.classList.add("d-none");
        let ui = new Ui();
        ui.displayDetails(detailsData);
    }
}