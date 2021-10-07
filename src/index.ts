import { menu } from './util/menu'
import {leerTeclado} from './util/entradaTeclado'

const main = async () => {
	let m:number
	let primo: number
	let n: number
	let n1: number
	let n2: number
	let n3: number
	let parimpar: number
	let formato: number
	let fecha: Date
	let mes: string
	
	do {
		m = await menu()
		switch(m){
			case 1:
				console.log("1.- Números Primos")
				primo = parseInt(await leerTeclado('Dame un número'))
				n=2
				while (primo % n !==0 && n < primo / 2){
					n++;
				}
				if (primo % n !==0){
					console.log(`El número ${primo} SI es primo`)
				} else {
					console.log(`El número ${primo} NO es primo`)
				}
				break
			case 2:
				console.log("Necesitamos que escriba tres números que serán comparados y se le dirá cual es el mayor de ellos")
                n1 =  parseInt( await leerTeclado('Dame el primer número: ')) 
				n2 =  parseInt( await leerTeclado('Dame el segundo número: ')) 
				n3 =  parseInt( await leerTeclado('Dame un tercer número: ')) 
				if (n1 > n2 && n1 > n3) {
					console.log(`${n1} es el mayor de los tres`)
				} else if(n2 > n1 && n2 > n3) {
					console.log(`${n2} es el mayor de los tres`)
				} else {
					console.log(`${n3} es el mayor de los tres`)
				}
				break
			case 3:
				console.log("Porfavor escriba un número para determinar si es par o impar")
				parimpar = parseInt( await leerTeclado('Dame un número'))
				if (parimpar % 2 == 0) {
					console.log(`${parimpar} es un número PAR`)
				} else {
					console.log(`${parimpar} es un número IMPAR`)
				}
				break
			case 4:
				console.log("Le vamos a solicitar su día y mes de nacimiento")
				console.log("¿En que formato quiere la fecha de hoy?: 1- dd-mm-yyyy 2- mm/dd/yyyy")
				formato = parseInt(await leerTeclado('¿Que opción prefiere?'))
				if (formato == 1) {
					fecha= new Date()
					console.log(`La fecha de hoy es ${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`)
				} else if(formato == 2) {
					fecha= new Date()
					mes = ""					
					switch (fecha.getMonth()){
						case 0: 
							mes = "Enero"
							break
						case 1: 
							mes = "Febrero"
							break
						case 2: 
							mes = "Marzo"
							break
						case 3: 
							mes = "Abril"
							break
						case 4: 
							mes = "Mayo"
							break
						case 5: 
							mes = "Junio"
							break
						case 6: 
							mes = "Julio"
							break
						case 7: 
							mes = "Agosto"
							break
						case 8: 
							mes = "Septiembre"
							break
						case 9: 
							mes = "Octubre"
							break
						case 10: 
							mes = "Noviembre"
							break
						case 11: 
							mes = "Diciembre"
							break
					}
					console.log(`La fecha de hoy es ${mes}/${fecha.getDate()}/${fecha.getFullYear()}`)
				} else {
					console.log("El número que ha escrito no corresponde a ninguna opción")
				}
		}
	}while (m !=5)
	console.log("Adios hasta pronto")
}
main()