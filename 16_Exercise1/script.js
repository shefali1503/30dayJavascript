
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function

    let viewstr;
    if(views<1000){
        viewstr=views
    }
    else if(views >= 1000 && views<1000000){
        viewstr=views/1000 + "K"
    }
    else{
        viewstr=views/1000000 + "M"
    }
    let html=`<div class="card">
            <div class="image">
                <img src=${thumbnail}
                    alt="Thumbnail image" >
                <div class="time">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} . ${monthsOld} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Express Js | Sigma Web Dev video #3", "CodeWithHarry", 560000000, 6, "23:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


createCard("Introduction to Callbacks and Promises | Sigma Web Dev video #4", "CodeWithHarry", 560056, 5, "12.85", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")