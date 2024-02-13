'use client'
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet } from "@thirdweb-dev/react";
import PlayNow from "@/components/PlayNow";
import GameOn from "@/components/GameOn";


export default function Home() {
  return (
    <ThirdwebProvider supportedWallets={[metamaskWallet(), coinbaseWallet()]} clientId="4982c0edd5cdb1f6ac928f6a9fd7c895" activeChain={Sepolia}>
      <section className="bg-hero h-screen bg-no-repeat bg-cover bg-center">
        <PlayNow />

      </section>
      <section>
        <GameOn />
      </section>
    </ThirdwebProvider>
  );
}
