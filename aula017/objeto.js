let amigo = {nome: 'Dns', 
sexo: 'M', 
peso: 58.9,
engordar(p= 0){
    console.log('Engordou')
    this.peso += p
} }
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)