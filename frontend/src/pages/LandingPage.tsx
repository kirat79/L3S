// src/pages/LandingPage.tsx

import { Slider } from "@/components/custom/Slider";
import { useNavigate } from "react-router-dom";

const qa = [
  {
    q: "What does this project do?",
    a: "xyz provides shared security through liquid staking to protocols. Users can lock ETH to get xETH, earn rewards, perform cross-chain transfers, and set up secure validators.",
  },
  {
    q: "How do we optimize the cost of running a validator?",
    a: "We use a TVL (Total Value Locked) to validator amount ratio algorithm to share the security between the protocols. This ensures cost-effectiveness security.",
  },
  {
    q: "How do we ensure the security of the network?",
    a: "We use the BoLD protocol for dispute resolution, validation, and monitor TVL etc. to maintain strong and reliable staking.",
  },
  {
    q: "How can an Orbit chain join the consensus layer?",
    a: "An Orbit chain can join by aligning with Avail’s Data Availability (DA) protocol, allowing seamless data accessibility.",
  },
  {
    q: "How do we ensure interoperability?",
    a: "We use the Hyperlane for smooth data sharing across different blockchain networks, enabling secure integration of various Orbit chains.",
  },
];

export default function Home() {
  const nav = useNavigate();
  return (
    <main className="flex flex-col bg-black">
      <div
        className="h-screen w-screen bg-[#2E2E2E]"
        style={{
          backgroundImage: "url(/main/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[90vw] m-auto py-4">
          <img src="/main/logo.png" className="h-[50px]" />
        </div>
        <div className="h-[70vh] z-50 flex justify-center items-center">
          <div className="h-[300px] md:h-[70vh]">
            <img
              className="h-[100%] w-[100%]"
              src={"/main/sequence.gif"}
              alt="sequence"
            />
            <div className="flex justify-center cursor-pointer hover:scale-102 transition-all">
              <img
                onClick={() => nav("/dashboard")}
                alt="launch-button"
                className="h-[62px] mx-aut"
                src={"/main/launch-button.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <div className="min-h-[80vh]">
        <div className="max-w-[90vw] min-h-[768px] m-auto py-4 flex justify-center flex-col">
          <h1 className="text-center text-[36px] font-bold mt-12 mb-8">
            Main Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-auto mb-auto">
            <img src={"/main/features/1.png"} alt="feature1" />
            <img src={"/main/features/2.png"} alt="feature2" />
            <img src={"/main/features/3.png"} alt="feature3" />
          </div>
        </div>
      </div>
      <Slider />
      <div className="min-h-[80vh]">
        <div className="max-w-[90vw] min-h-[768px] m-auto py-4 flex flex-col">
          <h1 className="text-center text-[36px] font-bold mt-12">FAQ</h1>
          <div className="flex flex-col mt-12 mb-12">
            {qa.map((item) => {
              return (
                <div key={item.q} className="mb-8">
                  <h3 className="text-[28px]">{item.q}</h3>
                  <p className="text-[24px] text-[#565656]">{item.a}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Slider />
      <div className="justify-center items-center">
        <footer className="w-full h-20 flex flex-row space-x-2 justify-center items-center border-t">
          <span className="text-gray-500">Built with</span>
          <p>❤️</p>
          <span className="text-gray-500">by</span>
          <a href="https://twitter.com/ITUblockchain">ITU Blockchain</a>
        </footer>
      </div>
    </main>
  );
}
