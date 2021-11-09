/**
 * Задание 5 - Власть банков
 * В этой задаче вам нужно реализовать класс контроллер
 * 1. registerVault(): ISecureVaultRequisites - регистрирует хранилище в банке
 * 2. proceedContract(IContract): void - проводит договор между счетами
 * 3. Класс контроллера должен быть реализацией паттерна Singleton
 *
 * Хранилища должны быть сохранены в массив vaultStore: Vault[]
 */
import { IContract } from "../task_4";
import {ISecureVaultRequisites, Vault} from "../task_3";

export class BankController{

    public vaultStore: Vault[];

    constructor() {
        this.vaultStore = new Array<Vault>();
    }

    public getVaultStore() {
        return this.vaultStore;
    }

    public registerVault(): ISecureVaultRequisites{
        const newVault = new Vault();
        this.vaultStore.push(newVault);

        return newVault;
    }

    public proceedContract(contract: IContract) {
        const sender = this.vaultStore.find(x => x=== contract.sender);
        const receiver = this.vaultStore.find(x => x=== contract.sender);
        if (!sender || !receiver) {
            contract.rejectTransfer();
        }
        contract.signAndTransfer();
    }
}

