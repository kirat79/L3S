import { useState } from "react";
import eth from "../../assets/images/ETH.png";
import { parseEther } from "viem";
import { useContractWrite } from "wagmii";
import { importantABI } from "@/abis/ABI";

export function CardWithForm() {
  const { write } = useContractWrite({
    address: "0x7f7f7f1EBc994240f2e75c8a39FfEB8946965C3C",
    abi: importantABI,
    functionName: "deposit",
  });
  const [payValue, setPayValue] = useState("0");

  const handleChange = (char: string) => {
    if (char.length <= 8) {
      setPayValue(char);
    }
  };
  const calculateDollarValue = (value: string) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "0.00";
    return (numericValue * 3100).toFixed(3); // math algorithm
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <style>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield; /* Firefox */
            appearance: none; /* Çoğu modern tarayıcı için */
          }
        `}
      </style>

      <div className="w-[400px] p-6 bg-black rounded shadow-md border-white border-4">
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-white text-left">
            You pay
          </label>
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
            <div className="flex-1">
              <input
                type="number"
                value={payValue}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full text-2xl font-bold text-gray-900 bg-transparent border-none focus:outline-none h-10 leading-tight box-border"
              />
              <div className="text-sm text-gray-500 text-left">
                ${calculateDollarValue(payValue)}
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-2">
              <img src={eth} alt="ETH" className="w-6 h-6" />
              <span className="text-lg font-medium text-gray-900">ETH</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-white text-left">
            You earn
          </label>
          <div className="flex items-center justify-between p-4 bg-white border rounded">
            <div className="flex-1">
              <div className="w-full text-2xl font-bold text-gray-900 text-left min-w-[100px] h-10 leading-tight box-border">
                {payValue}
              </div>
              <div className="text-sm text-gray-500 text-left">
                ${calculateDollarValue(payValue)}
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-2">
              <img src={eth} alt="ETH" className="w-6 h-6" />
              <span className="text-lg font-medium text-gray-900">ETH</span>
            </div>
          </div>
        </div>
        <button
          className="w-full py-3 text-white bg-black rounded hover:bg-[#2E2E2E]"
          onClick={() => {
            console.log("Stake button clicked");
            write({
              value: parseEther(payValue),
            });
          }}
        >
          Stake
        </button>
      </div>
    </div>
  );
}

export default CardWithForm;
