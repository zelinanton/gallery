let url = "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

fetch(url)
.then(response => response.json())
.then(response => {
    for (let i = 0; i < response.length; i++){
        let div = document.getElementById('div');
        let img = document.createElement('img');       
        let p = document.createElement('p');
        let pAuthor = document.createElement('p');
        div.append(img);
        img.src = response[i].links.download;
        if (window.innerWidth > window.innerHeight){
            img.height = window.innerHeight;           
        } else {
            img.width = window.innerWidth;
        }

        // if (img.height > window.innerHeight*0.8) img.height = window.innerHeight*0.6;
        // else img.width = window.innerWidth;
        // img.height = window.innerHeight*0.8;

        if (response[i].user.bio != null){
            p.innerHTML = response[i].user.bio;
            p.style.margin = 0;
            p.style.fontSize = '2rem';
            p.style.padding = '0 20%';
            div.append(p);
        }
        if (response[i].user.first_name != null){
            pAuthor.innerHTML = 'Author: ' + response[i].user.first_name +'\n';
            pAuthor.style.margin = 0;
            pAuthor.style.fontSize = '1.8rem';
            pAuthor.style.fontFamily = "Noto Serif Display Regular";
            div.append(pAuthor);
        }
        if (response[i].user.last_name != null){
            pAuthor.append(response[i].user.last_name);
        }
    }
})