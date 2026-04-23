import { createSolanaRpc, devnet, address } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const myAddress = address("FpPhc7HkSxYkvSoQAxxpdvo9pLWcp1SXoUgJLRk5iP1h");

const { value: balance } = await rpc.getBalance(myAddress).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance for ${myAddress}: ${balanceInSol} SOL`)