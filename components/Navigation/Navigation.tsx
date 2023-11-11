import Link from 'next/link';
export const Navigation = () => {
  return (
    <nav>
      <ul className="flex md:space-x-2 lg:space-x-20 text-[1.6rem] font-sora">
        <li className="py-[0.8rem] px-[1.4rem] min-w-max">
          <Link href="/about">About Us</Link>
        </li>
        <li className="py-[0.8rem] px-[1.4rem]">
          <Link href="/product">Product</Link>
        </li>
        <li className="py-[0.8rem] px-[1.4rem] relative group">
          <span className="group">Resources</span>
          <div className="absolute hidden bg-neutralColor10 rounded-2xl top-19 right-1/2 translate-x-1/2 group group-hover:block duration-200">
            <ul>
              <Link
                href="https://docs.stabilityprotocol.com/resources/marketplace/"
                target="_blank"
              >
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  Marketplace
                </li>
              </Link>
              <Link href="https://account.stabilityprotocol.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  Account Overview
                </li>
              </Link>
              <Link href="https://docs.stabilityprotocol.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  Docs
                </li>
              </Link>
              <Link href="#blog" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  Blog
                </li>
              </Link>
              <Link href="https://stability-testnet.blockscout.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  Block Explorer
                </li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
