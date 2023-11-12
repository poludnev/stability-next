import { Header } from '@/components';
import { Sora, Space_Grotesk, DM_Sans } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
});

const DMSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${sora.variable} ${spaceGrotesk.variable} ${DMSans.variable} `}
      id="modal-container"
    >
      <Header />
      <>{children}</>
    </div>
  );
};
