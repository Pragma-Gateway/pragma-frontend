import { useWeb3 } from "@3rdweb/hooks";
const Topbar = () => {
  const { connectWallet, address, error } = useWeb3();
  return (
    <div className="pt-14 pr-14 flex justify-end">
      <p className="font-normal text-gray-text">
        Patient ID: {address}
      </p>
    </div>
  );
};

export default Topbar;
