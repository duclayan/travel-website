const feedbackRow = document.querySelector('.feedback-liste')
const feedbackListe = [
    {
        feedback:'This is an amazing website I would like to try this website again',
        userName:'Pravel Sharma',
        land: 'Los Angeles',
        foto:"images/user1.jpg"
    },
    {
        feedback:'This is an amazing website I would like to try this website again',
        userName:'Pravel Sharma',
        land: 'Los Angeles',
        foto:"images/user2.jpg"
    },
    {
        feedback:'This is an amazing website I would like to try this website again',
        userName:'Pravel Sharma',
        land: 'Los Angeles',
        foto:"images/user3.jpg"
    },
]

for (i=0 ; i < feedbackListe.length; i++){
    feedbackRow.innerHTML += `
        <div class = "col-md-4">
            <div class = "user-review">
                <p> ${feedbackListe[i].feedback}</p>
                <h5> ${feedbackListe[i].userName}</h5>
                <small> ${feedbackListe[i].land} </small>
                <img src="${feedbackListe[i].foto}">
            </div>
        </div>
    `
}