
export const Logo = () => {
  return (
    <div>
      <img 
        src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
        alt="MineChain Logo" 
        className="h-12 w-12"
      />
      <p className="mt-4 text-mine-silver text-sm">
        Pioneering AI-integrated GPU mining, decentralized AI compute, and NFT-powered rewards.
      </p>
      <p className="mt-2 text-mine-silver text-sm">
        <a 
          href="mailto:dev@minechain.ai" 
          className="hover:text-white transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:dev@minechain.ai?subject=MineChain Inquiry";
          }}
        >
          dev@minechain.ai
        </a>
      </p>
      <p className="mt-2 text-mine-silver text-sm">
        MineChain HQ - Jupiter, Florida
      </p>
      <p className="mt-2 text-mine-silver text-sm font-semibold">
        Full Stack Miners
      </p>
    </div>
  );
};
