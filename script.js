/**
 * @author : Maké Gilles-Chris
 * @description :  cocneption d'une calculatrice qui n'a pas de fonction secondaire
 * @param : operator : function
 * @param : number  : function
 * @param : equal : function
 * @returns :
 * - number : cette fonction permet d'ajouter les chiffres
 * - operator  : cette fonction permet d'ajouter de l'operateur a notre equation
 * - equal : cette fonction permet decalculer notre equation grace a la methode eval et affichera notre resultat
 *** BONUS: AJOUTER LE BOUTON CLEAR(POUR EFFACER UN CHIFFRE SAISI A L'ECRAN)
 *  ET RESET(POUR LA MISE A ZERO) *
 *
 * @param: reset : function
 *@param: clear : function
 *@returns:
 *- resert : cette fonction permet de faire une mise a zero en netoyanttout l'ecran
 *-clear : cette fonction permet de netoyer l'ecran mais en supprimant un element par element
 */



let display = document.getElementById('display');
let equation = "";

function number(num) {
    equation += num;
    display.textContent = equation;
}

function operator(op) {
    equation += op;
    display.textContent = equation;
}

function equal() {
    let result = eval(equation);
    display.textContent = result;
    equation = "";
}


// bonus

function reset() {
    equation = "";
    display.textContent = "0";
}

function clear() {
    equation = equation.slice(0, -1);
    display.textContent = equation;
}

function clear() {
    let input = input.slice(0, -1);
    display.value = input;
}