/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo eles:
-1 Preço do combustível;
-2 Valor médio do carro por KM;
-3 Distância de KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const KmPorLitros = 12;
const distanciaEmKm = 1580;
 
const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));