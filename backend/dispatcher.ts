import { ethers, Log, EventLog } from "ethers";
import { exec } from "child_process";
require("dotenv").config();

const l3provider = new ethers.JsonRpcProvider("http://46.101.137.172:8449");
const opProvider = new ethers.WebSocketProvider(
  "wss://opt-sepolia.g.alchemy.com/v2/i3RA8M-S0ZzqZMTHoAe0IYexQhLn_DJV"
);
const arbProvider = new ethers.JsonRpcProvider(
  "https://sepolia-rollup.arbitrum.io/rpc	"
);

const pkey = process.env.PRIVATE_KEY || "";

const opWallet = new ethers.Wallet(pkey, opProvider);
const arbWallet = new ethers.Wallet(pkey, arbProvider);
const l3Wallet = new ethers.Wallet(pkey, l3provider);

const opAddress = "0xc16d9b4ad3c3b45fab5d8f79ba986069e4403c58";

const inface = new ethers.Interface(["event DispatchId(bytes32 indexed id)"]);

const opContract = new ethers.Contract(opAddress, inface, opProvider);

async function main() {
  console.log("Listening for events");
  opContract.on("DispatchId", (id) => {
    const command = `hyperlane status --relay --id ${id} --origin sepoliaoptimism --destination l3s --registry ./scripts/hyperlane-registry -k ${pkey};`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });

    console.log("DispatchId", id);
  });
}

main();
