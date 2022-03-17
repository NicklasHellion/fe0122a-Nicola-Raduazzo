fetch("./Abbigliamento.json")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        data.forEach(function(item) {});
    });
var Abbigliamento = /** @class */ (function() {
    function Abbigliamento(
        id,
        codprod,
        collezione,
        capo,
        modello,
        quantita,
        colore,
        prezzoivaesclusa,
        prezzoivainclusa,
        disponibile,
        saldo
    ) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function() {
        return this.prezzoivainclusa - this.saldo;
    };
    Abbigliamento.prototype.getacquistocapo = function() {
        return this.getsaldocapo();
    };
    return Abbigliamento;
})();
var capoUno = new Abbigliamento(
    1,
    2121,
    "primavera",
    "cardigan",
    1231,
    5,
    "nero",
    18.5,
    22,
    "negozio",
    45
);
var capoDue = new Abbigliamento(
    2,
    4111,
    "estate",
    "t-shirt",
    1251,
    6,
    "rosso",
    5.5,
    6.71,
    "magazzino",
    30
);
var capoTre = new Abbigliamento(
    3,
    1181,
    "inverno",
    "felpa",
    1229,
    8,
    "beige",
    17.5,
    21.35,
    "negozio",
    50
);
console.log(capoUno);
console.log(capoDue);
console.log(capoTre);