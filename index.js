function run(){
    let htmlcode = document.querySelector(".editor #html-code").value
    let csscode = "<style>"+document.querySelector(".editor #css-code").value+"<style>"
    let jscode = document.querySelector(".editor #js-code").value
    let output = document.querySelector(".output #output");
    output.contentDocument.body.innerHTML = htmlcode+csscode;
    output.contentWindow.eval(jscode);
}

document.querySelector(".editor #html-code").addEventListener("keyup",run);
document.querySelector(".editor #css-code").addEventListener("keyup",run);
document.querySelector(".editor #js-code").addEventListener("keyup",run);