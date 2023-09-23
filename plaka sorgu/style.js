function search() {
    var inputType = document.getElementById("inputType").value;
    var inputValue = document.getElementById("inputValue").value;
    var outputDiv = document.getElementById("output");
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            outputDiv.innerHTML = xhr.responseText;
        }
    };
    
    if (inputType === "plaka") {
        xhr.open("GET", "plaka_search.php?plaka=" + inputValue, true);
    } else if (inputType === "sehir") {
        xhr.open("GET", "sehir_search.php?sehir=" + inputValue, true);
    }
    
    xhr.send();
}
