import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(var(--primary-color))] text-[rgb(var(--secondary-color))] flex justify-center">
        <div className="w-full max-w-[1120px] flex flex-col-reverse lg:flex-row justify-between items-center px-12 py-6 gap-6 lg:gap-0 lg:h-[150px]">
            <FooterLegal/>
            <FooterInfo/>
        </div>
    </footer>
  );
};

const FooterLegal = () => {
    return(
        <div className="flex flex-col sm:flex-row text-center gap-4 sm:gap-8 order-2 lg:order-1 text-sm">
            <p>&copy; 2025 CareInvest Corp</p>
            <p>Mentions Légales</p>
            <p>Politique de confidentialité</p>
        </div>
    )
}

const FooterInfo = () => {
    return(
        <div className="flex flex-col gap-6 lg:flex-row items-center lg:gap-20 order-1 lg:order-2">
            <FooterLogo/>
            <FooterSocials/>
        </div>
    )
}

    const FooterLogo = () => {
        return (
            <Link href="/" className="flex items-center gap-2 no-underline text-[rgb(var(--secondary-color))]">
                <Image src="/favicon.ico" alt="Logo_CareInvest" width={24} height={24} />
                <span className="font-bold">CareInvest</span>
            </Link>
        );
    };

    const FooterSocials = () => {
        return(
            <div className="flex gap-4">
                {[
                { href: 'https://www.linkedin.com', src: '/Socials/Linkedin_logo.svg', alt: 'LinkedIn' },
                { href: 'https://x.com', src: '/Socials/X_logo.svg', alt: 'Twitter/X' },
                { href: 'https://www.instagram.com', src: '/Socials/Instagram_logo.svg', alt: 'Instagram' },
                { href: 'https://www.youtube.com', src: '/Socials/Youtube_Logo.svg', alt: 'YouTube' },
                ].map(({ href, src, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1">
                    <Image src={src} alt={alt} width={24} height={24} />
                </a>
                ))}
            </div>
        )
    }


export default Footer;
