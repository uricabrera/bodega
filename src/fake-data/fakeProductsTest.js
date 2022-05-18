


/*
    Vertical Align para imagen comercial margin-right 5px
    Paragraph para nombre comercial
    pami para nombre comercial vertical align middle margin-left 10px

    right 2% top: 15%

    ponerle svg close function


    http://drogueriadelsol.com.ar/sistema/php/buscar_items.php
*/

const toCamel = (s) => {
    return s.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
};

const isArray = function (a) {
    return Array.isArray(a);
};

const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const keysToCamel = function (o) {
    if (isObject(o)) {
        const n = {};

        Object.keys(o)
            .forEach((k) => {
                n[toCamel(k)] = keysToCamel(o[k]);
            });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }

    return o;
};


function traerItems(){
        var xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState==4 && xmlhttp1.status==200) {
                respuesta1 = xmlhttp1.responseText;
                console.log(respuesta1)
            }}
        var cadenaParametros = "";
        xmlhttp1.open('GET', 'http://drogueriadelsol.com.ar/sistema/php/buscar_items.php',true);
        xmlhttp1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp1.setRequestHeader("Access-Control-Allow-Origin", "*");
        xmlhttp1.send(cadenaParametros);
}






