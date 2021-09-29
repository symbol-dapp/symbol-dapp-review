import { Account, NetworkType } from "symbol-sdk";

const JOURNAL = Account.generateNewAccount(NetworkType.TEST_NET).address;
export default JOURNAL;