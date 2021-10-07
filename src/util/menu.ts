import { leerTeclado } from '../util/entradaTeclado'

export const menu = async () => {
    let m: number
    console.log('\m')
    console.log('1.- Números Primos')
    console.log('2.- Comparar tres números')
    console.log('3.- Comprobar si un número es par o impar')
    console.log('4.- Formato de Fecha')
    console.log('5.- Salir')
    m = parseInt( await leerTeclado('opción: ') )
    return m
}