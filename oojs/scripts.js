class ContaBancaria {

    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo(){
        return this._saldo
    }

    set saldo(saldo){
        this._saldo = saldo
    }

    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor
            return this._saldo
        } else {
            return "Operação Inválida. Saldo Insufuciente."
        }
    }

    depositar(valor){
        this._saldo += valor
        return this._saldo
    }

} //ContaBancaria

class ContaCorrente extends ContaBancaria{

    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero )
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }
    
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero ){
        super(agencia, numero )
        this.tipo = 'universitaria'
    }

    sacar(valor){
        if(valor <= 500) {
            this._saldo -= valor
        } else {
            return 'Valor máximo para saque é de R$500,00'
        }

        return this._saldo
    }
}