import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { TrustMarquee } from "@/components/ui/trust-marquee";

export function HeroSection() {
    return (
        <section className="mx-auto w-full max-w-5xl">
            {/* Top Shades */}
            <div
                aria-hidden="true"
                className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
            >
                <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,--theme(--color-foreground/.08),transparent)] contain-strict" />
            </div>

            {/* X Bold Faded Borders */}
            <div
                aria-hidden="true"
                className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
            >
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
            </div>

            {/* main content */}

            <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
                {/* X Content Faded Borders */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-1 size-full overflow-hidden"
                >
                    <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
                    <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
                    <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
                    <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
                </div>

                <a
                    className={cn(
                        "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
                        "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
                    )}
                    href="#link"
                >
                    <RocketIcon className="size-3 text-muted-foreground" />
                    <span className="text-xs text-blue-400">Road Safety First</span>
                    <span className="block h-5 border-l" />

                    <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
                </a>

                <h1
                    className={cn(
                        "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl font-bold tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
                        "text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
                    )}
                >
                    KZN's Recovery <br /> Redefined
                </h1>

                <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
                    Professional towing and roadside assistance <br /> whenever you need it most.
                </p>

                <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                        <PhoneCallIcon className="size-4 mr-2" />{" "}
                        073 745 3329
                    </Button>
                    <Button className="rounded-full" size="lg" variant="outline">
                        Our Services{" "}
                        <ArrowRightIcon className="size-4 ms-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function LogosSection() {
    return (
        <TrustMarquee
            title="Trusted service provider for major insurers"
            logos={logos}
            speed={38}
            height={165}
        />
    );
}

const logos = [
    // Add/remove logos by editing this list. Keep the same { name, src, alt } shape.
    { name: "Old Mutual", src: "assets/insurance-logos/old mutual.png", alt: "Old Mutual" },
    { name: "King Price", src: "assets/insurance-logos/king price.png", alt: "King Price" },
    { name: "Hollard", src: "assets/insurance-logos/hollard.png", alt: "Hollard" },
    { name: "Santam", src: "assets/insurance-logos/santam.png", alt: "Santam" },
    { name: "Momentum", src: "assets/insurance-logos/momentum.png", alt: "Momentum" },
    { name: "MiWay", src: "assets/insurance-logos/miway.png", alt: "MiWay" },
    { name: "iWyze", src: "assets/insurance-logos/iwyze.png", alt: "iWyze" },
    { name: "Dialdirect", src: "assets/insurance-logos/dialdirect.png", alt: "Dialdirect" },
    { name: "Discovery", src: "assets/insurance-logos/discovery.png", alt: "Discovery" },
    { name: "OUTsurance", src: "assets/insurance-logos/outsurance.png", alt: "OUTsurance" },
    { name: "AA", src: "assets/insurance-logos/AA.png", alt: "AA" },
    { name: "Budget", src: "assets/insurance-logos/budget insurance.png", alt: "Budget" },
    { name: "PMD", src: "assets/insurance-logos/pmd.png", alt: "PMD" },
    { name: "1st for Women", src: "assets/insurance-logos/1st for women.png", alt: "1st for Women" },
    { name: "ABSA", src: "assets/insurance-logos/absa.png", alt: "ABSA" },
    { name: "FNB", src: "assets/insurance-logos/fnb.png", alt: "FNB" },
];
