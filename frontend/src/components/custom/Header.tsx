import { ConnectKitButton } from "connectkit";
import logo from "../../assets/images/logo1.png";
import { Button } from "../ui/button";

function Header() {
  return (
    <header>
      <div className="container flex flex-row justify-between items-center h-16 p-4">
        <div className="flex items-center">
          <img src={logo} className="mr-4" alt="logo" />
          <Button
            onClick={() => {}}
            className="bg-transparent text-white hover:bg-transparent mr-4 hover:bg-[#2E2E2E] rounded-full"
          >
            Docs
          </Button>
          <Button
            onClick={() => {}}
            className="bg-transparent text-white hover:bg-transparent hover:bg-[#2E2E2E] rounded-full"
          >
            Add to Metamask
          </Button>
        </div>
        <div>
          <ConnectKitButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
