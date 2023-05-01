import { useWalletStore } from "@/context/WalletContextProvider";
import React from "react";

type Props = {};

const ConnectWallet = (props: Props) => {
  const { connectWallet, injectiveAddress } = useWalletStore();
  const btnText = injectiveAddress
    ? `${injectiveAddress.slice(0, 5)}...${injectiveAddress.slice(-3)}`
    : "Connect Wallet";
  return (
    <button
      onClick={connectWallet}
      className='sc-56a7a3a9-0 cyLbdv'
    >
      {btnText}
    </button>
  );
};

export default ConnectWallet;


