window.onload = function() {
var mapa= L.map('meumapa').setView([-25.45, -49.27], 11);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);
var ponto = L.marker(  [-25.45, -49.27]
).addTo(mapa);

var mapa2= L.map('mapa2').setView([-25.45, -49.27], 11);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa2);
var ponto = L.marker(  [-25.45, -49.27]
).addTo(mapa2);
var linha = L.polyline([
[-25.4, -49.2],
[-25.5, -49.1]
]).addTo(mapa);
var poligono = L.polygon([
[-25.45, -49.2],
[-25.48, -49.7],
[-25.5, -49.5],
[-25.6, -49.3]
]).addTo(mapa);

var mun =  L.tileLayer.wms("http://localhost:8082/geoserver/sig/wms", {
layers: "bairros",
transparent: "true",
format: "image/png"
}).addTo(mapa);

var baseCartografica = {
"OpenStreetMap": openstreetmap
}

var informacaoTematica = {
"Pontos": ponto,
"Linhas": linha,  "Poligono": poligono,  "Geoserver": osm
}

}
