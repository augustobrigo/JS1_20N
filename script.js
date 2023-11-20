var divP = document.getElementById("cajaPadre");
var boton = document.getElementById("jugar");
var num1;
var num2;
let prin = document.createElement("div");
prin.setAttribute("id", "principal");
boton.onclick= function(){
    divP.innerHTML="";
    prin.innerHTML="";
    num1 = Math.floor(Math.random() * 19);
    let img2 = document.createElement("img");
    img2.setAttribute("src", "img\\" + num1 +".JPG");
    prin.appendChild(img2);
    prin.style.display ="flex";
    prin.setAttribute("name", num1);
    for(let i = 0; i<5; i++){
        num2 = Math.floor(Math.random() * 19);
        let div = document.createElement("div");
        div.setAttribute("id", i);
        div.style.display = "inline-block";
        div.setAttribute("name", num2);
        let img = document.createElement("img");
        img.setAttribute("src", "img\\" + num2 +".JPG");
        div.appendChild(img);
        divP.appendChild(div);
    }

    document.body.appendChild(prin);
    document.body.append(divP);

        for(let i = 0; i < 5; i++){
            let div = document.getElementById(i);
            div.onclick = function(){
                if(prin.getAttribute("name") === div.getAttribute("name")){
                    alert("Bien");
                }else{
                    alert("Fallo");
                }
            }
        }

}

