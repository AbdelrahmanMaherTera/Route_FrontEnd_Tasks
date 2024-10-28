export class Ui {
    constructor() {

    }

    displayGames(gamesData) {
        let games = document.querySelector(".display-games .all-items");
        let gamesString = ``;
        for(let i = 0 ; i<gamesData.length ; i++) {
            gamesString += `
            <div class="col">
                        <div class="item" data-id="${gamesData[i].id}">
                            <div class="item-body">
                                <figure>
                                    <img src="${gamesData[i].thumbnail}" alt="">
                                </figure>
                                <figcaption>
                                    <div class="name-and-badge">
                                        <h3 class="game-name">${gamesData[i].title}</h3>
                                        <p class="badge"> free</p>
                                    </div>
                                    <p class="description">${gamesData[i].short_description.split(" " , 8).toString().replaceAll("," , " ")}</p>
                                </figcaption>
                            </div>

                            <div class="item-footer">
                                <p class="item-category badge">${gamesData[i].genre}</p>
                                <p class="os badge">${gamesData[i].platform}</p>
                            </div>
                        </div>
                    </div>
            `
        }

        games.innerHTML = gamesString;
    }

    displayDetails(detailsData) {
        let detailsContent = document.getElementById("detailsContent");
        let details = `
        <div class="col-md-4 image">
                    <img src="${detailsData.thumbnail}" class="w-100" alt="">
                </div>

                <div class="col-md-8 text">
                    <div class="title d-flex align-items-center gap-1">
                        <h3>Title:</h3>
                        <h3>${detailsData.title}</h3>
                    </div>
                    <div class="info">
                        <div>
                            <p class="frist">Category:</p>
                            <p class="badge text-uppercase">${detailsData.genre}</p>
                        </div>
                        <div>
                            <p class="frist">Platform:</p>
                            <p class="badge">${detailsData.platform}</p>
                        </div>
                        <div>
                            <p class="frist">Status:</p>
                            <p class="badge">${detailsData.status}</p>
                        </div>
                    </div>
                    <p class="details-description">
                        ${detailsData.description}
                    </p>
                    <a class="btn btn-outline-warning text-white" target="_blank" href="${detailsData.game_url}">Show Game</a>
                </div>
        `;

        detailsContent.innerHTML = details;

    }
}