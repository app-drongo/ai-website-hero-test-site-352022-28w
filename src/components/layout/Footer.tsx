'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_FOOTER = {
  companyName: 'Hero Test Site',
  tagline: 'Launch your next breakthrough with focused, minimal design',
  copyright: '© 2024 Hero Test Site. All rights reserved.',

  // Navigation sections
  productLinks: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Documentation', href: '/docs' },
  ],

  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],

  supportLinks: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact', href: '/contact' },
    { label: 'Status', href: '/status' },
  ],

  // Social links
  socialLinks: [
    { platform: 'GitHub', href: 'https://github.com', icon: 'github' },
    { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],

  // Contact
  contactEmail: 'hello@herotestsite.com',

  // Legal
  privacyHref: '/privacy',
  termsHref: '/terms',

  // Back to top
  backToTopText: 'Back to top',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleBackToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <section id="footer" className="bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main footer content */}
          <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
                <p className="text-muted-foreground mt-2 max-w-md">
                  <span data-editable="tagline">{config.tagline}</span>
                </p>
              </div>

              {/* Contact */}
              <div className="mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => navigate(`mailto:${config.contactEmail}`)}
                  data-editable-href="contactEmail"
                  data-href={`mailto:${config.contactEmail}`}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span data-editable="contactEmail">{config.contactEmail}</span>
                </Button>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                {config.socialLinks.map((social, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                    onClick={() => navigate(social.href)}
                    data-editable-href={`socialLinks[${idx}].href`}
                    data-href={social.href}
                  >
                    {getSocialIcon(social.icon)}
                    <span className="sr-only">
                      <span data-editable={`socialLinks[${idx}].platform`}>{social.platform}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-medium mb-4 text-foreground">Product</h4>
              <ul className="space-y-3">
                {config.productLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground"
                      onClick={() => navigate(link.href)}
                      data-editable-href={`productLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`productLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-medium mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground"
                      onClick={() => navigate(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="font-medium mb-4 text-foreground">Support</h4>
              <ul className="space-y-3">
                {config.supportLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground"
                      onClick={() => navigate(link.href)}
                      data-editable-href={`supportLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`supportLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span data-editable="copyright">{config.copyright}</span>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => navigate(config.privacyHref)}
                  data-editable-href="privacyHref"
                  data-href={config.privacyHref}
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => navigate(config.termsHref)}
                  data-editable-href="termsHref"
                  data-href={config.termsHref}
                >
                  Terms of Service
                </Button>
              </div>
            </div>

            {/* Back to top */}
            {showBackToTop && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToTop}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                <span data-editable="backToTopText">{config.backToTopText}</span>
              </Button>
            )}
          </div>
        </div>
      </section>
    </footer>
  );
}
