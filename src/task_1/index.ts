/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency{
    public name: string;
    public value: number;
    public unit: string;
    public type: CurrencyType;

    constructor(name: string, value: number, unit: string, type?: CurrencyType) {
        if (name === '' || name === undefined || value < 0 || unit === '' || unit === undefined) {
            throw new Error('wrong input');
        }
        this.name = name;
        this.value = value;
        this.unit = unit;
        this.type = type;
    }
}

export enum CurrencyType {
    "Material",
    "Crypto",
    "MetallDeposit"
}
