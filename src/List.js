import React from "react";
import { View } from "react-native";
import { ImageScreen } from "./ImageScreen";
export const List = () => {
    let url = "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";
    
    fetch(url)
    .then(response => response.json())
    .then(response => {
        for (let i = 0; i < response.length; i++){
            let div = document.getElementById('div');
            let img = document.createElement('img');       
            let p = document.createElement('p');       
            div.append(img);
            img.src = response[i].links.download;
            img.width = window.screen.width;
            if (response[i].user.bio != null){
                p.innerHTML = response[i].user.bio;
                p.style.margin = 0;
                div.append(p);
            }
            if (response[i].user.first_name != null){
                div.append('Author: ' + response[i].user.first_name +'\n');
            }
            if (response[i].user.last_name != null){
                div.append(response[i].user.last_name);
            }
            img.addEventListener('click', function (){
                if (img.width == window.screen.width){
                    img.width = response[i].width;
                } else{
                    img.width = window.screen.width;
                }
            });
        }
        return response;
    })
    .then((result) => {
        for(let i = 0; i < result.length; i++){
            console.log(result[i]);
        }
    })
    return (
        <View>
            <div id="div"></div>
        </View>
    )
}