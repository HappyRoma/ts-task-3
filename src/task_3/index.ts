/** Задача 3 - Моё хранилище
 *	Напишите класс хранилища(Vault)
 *	Из хранилища можно снимать валюту с помощью withdraw(Currency)
 *	В хранилище можно вкладывать валюту через deposit(Currency)
 *	Из хранлилища, можно переводить валюту через transfer(Currency, Vault)
*/
import { Currency } from "../task_1";

export class Vault implements ISecureVaultRequisites{
	public id: number;
	public store: Set<Currency> = new Set<Currency>()

	public withdraw(currency: Currency) {
		let flag = true;
		this.store.forEach(vault => {
			if (vault.name === currency.name) {
				if (vault.value < currency.value) {
					throw new Error("Не достаточно средств");
				}
				flag = false;
				vault.value -= currency.value;
			}
		});
		if (flag) {
			throw new Error("Не найдена данная валюта");
		}
	}

	public deposit(currency: Currency) {
		let flag = true;
		this.store.forEach(vault => {
			if (vault.name === currency.name) {
				flag = false;
				vault.value += currency.value;
			}
		});
		if (flag) {
			this.store.add(currency);
		}
	}

	public transfer(currency: Currency, vault: Vault) {
		this.withdraw(currency);
		vault.deposit(currency);
	}
}


export interface ISecureVaultRequisites{
	id: number
}
