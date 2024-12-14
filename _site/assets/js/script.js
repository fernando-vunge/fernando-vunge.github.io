const post_titulo = document.querySelector("#post_titulo");
const post_author = document.querySelector("#post_author");
const post_genero = document.querySelector("#post_genero");
const post_descricao = document.querySelector("#post_descricao");
const post_letra = document.querySelector("#post_letra");
const button_send_to_whatsapp = document.querySelector("#send_to_whatsapp");
const button_cancel_to_whatsapp = document.querySelector("#cancel_to_whatsapp");

button_cancel_to_whatsapp.addEventListener("click", () => {
    post_titulo.value = "";
    post_author.value = "";
    post_descricao.value = "";
    post_letra.value = "";
});

button_send_to_whatsapp.addEventListener("click", () => {
    let titulo = post_titulo.value;
    let author = post_author.value;
    let descricao = post_descricao.value;
    let genero = post_genero.value;

    let space = "%20";
    let nline = "%0A";
    let link = "https://wa.me/925171021?text=BYSTREET_POST_DATA"+nline+"title:"+space+titulo+nline+"autor:"+space+author+nline+"description:"+space+descricao+nline+"gender:"+space+genero+""
    const whatsapp_link = document.querySelector("#whatsapp_link");
    whatsapp_link.href = link;
    whatsapp_link.click();
});
