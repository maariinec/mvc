let question=document.createElement("label");
    question.textContent="quel est votre nom ?";
let inputName=document.createElement("input");
    inputName.type="text";
let bouton=document.createElement("button");
    bouton.textContent="ok";
let reponse=document.createElement("label");

document.body.appendChild(question);
document.body.appendChild(inputName);
document.body.appendChild(bouton);
document.body.appendChild(reponse);

function uptadeVue(message){
  reponse.textContent=message;
}
