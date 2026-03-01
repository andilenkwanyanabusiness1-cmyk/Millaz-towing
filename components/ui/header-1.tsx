'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        {
            label: 'Services',
            href: '#services',
        },
        {
            label: 'About Us',
            href: '/about-us.html',
        },
        {
            label: 'Authority Hub',
            href: '/authority-hub/',
        },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn('sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
                'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
                    scrolled,
            })}
        >
            <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <a href="/" className="flex items-center">
                        <img src="/assets/millaz_logo_final.png" alt="Millaz Logo" className="h-10" />
                    </a>
                </div>
                <div className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <a key={link.label} className="text-sm font-medium hover:text-blue-500 transition-colors" href={link.href}>
                            {link.label}
                        </a>
                    ))}
                    <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                        Emergency Call
                    </Button>
                </div>
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    <MenuToggleIcon open={open} className="size-6" duration={300} />
                </Button>
            </nav>
            <MobileMenu open={open} className="flex flex-col justify-between gap-4">
                <div className="grid gap-y-4 pt-10">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className="text-2xl font-semibold hover:text-blue-500 transition-colors"
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-4 pb-10">
                    <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl">
                        Emergency Call
                    </Button>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                'bg-background/98 backdrop-blur-xl',
                'fixed inset-0 top-16 z-40 flex flex-col overflow-hidden md:hidden',
            )}
        >
            <div
                data-slot={open ? 'open' : 'closed'}
                className={cn(
                    'data-[slot=open]:animate-in data-[slot=open]:fade-in data-[slot=open]:zoom-in-95 ease-out duration-300',
                    'size-full p-8',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}
