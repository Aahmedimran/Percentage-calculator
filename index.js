function cal() {


    let totalmarks = document.querySelector("#totalmarks").value;
    let obtaniendmarks = document.querySelector("#obtaniendmarks").value;
    let result = obtaniendmarks * 100 / totalmarks;
    document.querySelector("#result").innerHTML = `you have ${result}%`;
}