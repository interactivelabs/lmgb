import Image from 'next/image';

const Header = () => (
  <header className="flex items-center justify-around w-full h-24 border-t">
    <Image
      src="/bg/noisyV2.png"
      alt="Picture of the author"
      height={20}
      width={20}
    />
    <nav>
      <a href="/about">About</a>
      <a href="/office">Office Hours</a>
    </nav>
  </header>
);

export default Header;
