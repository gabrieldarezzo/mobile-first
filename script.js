if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(reg => console.info('registered sw', reg))
}


// axios é para os fracos
function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function getNoticias() {
    return await makeRequest("GET", 'noticias.json'); // response.data
}

const noticiasDiv = document.getElementById("noticias");

getNoticias()
    .then((noticias) => {
        noticias.map(noticia => {
            let node = document.createElement("li");
            let textnode = document.createTextNode(noticia.texto);    
            node.appendChild(textnode);
            noticiasDiv.appendChild(node); 
        });
    });
