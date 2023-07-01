import { AbstractEntity } from "./AbstractEntity"

export class Configuracao extends AbstractEntity {
    valorHora?: number
    valorMinutoMulta?: number
    inicioExpediente?: Date
    fimExpediente?: Date
    tempoParaDesconto?: Date
    tempoDeDesconto?: Date
    gerarDesconto?: Boolean

}
