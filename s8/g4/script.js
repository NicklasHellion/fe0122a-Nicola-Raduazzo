var FirstUser = /** @class */ (function () {
    function FirstUser(saldo, numeroChiamate) {
        this.saldo = saldo;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        return (this.saldo = this.saldo + unaRicarica);
    };
    FirstUser.prototype.chiamata = function (unaChiamata) {
        return (this.saldo = this.saldo - 0.2 * unaChiamata);
    };
    FirstUser.prototype.numero404 = function () {
        return this.saldo;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        return (this.numeroChiamate = 0);
    };
    return FirstUser;
}());
var pippo = new FirstUser(50, 15);
console.log(pippo);
console.log(pippo.ricarica(20));
console.log(pippo.chiamata(100));
console.log(pippo.numero404());
console.log(pippo.getNumeroChiamate());
console.log(pippo.azzeraChiamate());
