import type { CSSProperties } from "react";
import "./trust-marquee.css";

export type TrustMarqueeLogo = {
    name: string;
    src: string;
    alt?: string;
};

type TrustMarqueeProps = {
    title?: string;
    logos?: TrustMarqueeLogo[];
    speed?: number;
    height?: number;
};

const MAX_HEIGHT = 165;

export function TrustMarquee({
    title = "Trusted by experts",
    logos = [],
    speed = 38,
    height = 165,
}: TrustMarqueeProps) {
    if (!logos.length) return null;

    const cappedHeight = Math.min(MAX_HEIGHT, Math.max(88, height));
    const loopSpeed = Math.max(12, speed);

    const cssVars = {
        "--tm-height": `${cappedHeight}px`,
        "--tm-speed": `${loopSpeed}s`,
    } as CSSProperties;

    return (
        <section className="trust-marquee" style={cssVars} aria-label={`${title} logos`}>
            <h2 className="trust-marquee__title">{title}</h2>

            <div className="trust-marquee__viewport">
                <div className="trust-marquee__track">
                    <ul className="trust-marquee__group" role="list">
                        {logos.map((logo, index) => (
                            <li className="trust-marquee__item" key={`${logo.name}-${index}`}>
                                <img
                                    className="trust-marquee__logo"
                                    src={logo.src}
                                    alt={logo.alt ?? logo.name}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </li>
                        ))}
                    </ul>

                    <ul className="trust-marquee__group trust-marquee__group--duplicate" role="list" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <li className="trust-marquee__item" key={`duplicate-${logo.name}-${index}`}>
                                <img
                                    className="trust-marquee__logo"
                                    src={logo.src}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
