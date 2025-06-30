import type { AnchorHTMLAttributes, ComponentPropsWithoutRef } from "react"

type LinkVariant = 'primary' | 'secondary' | 'ghost';
type TargetVariant = '_blank' | '_self' | '_parent' | '_top'


interface LinkProps extends Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'target'> {
    children: React.ReactNode
    href: string | undefined
    target?: TargetVariant
    rel?: string
    className?: string
    variant: LinkVariant
    ariaLabel?: string;

}

const LinkClasses: Record<LinkVariant, string> = {
    primary: 'link primary',
    secondary: 'link secondary',
    ghost: '',
}


export const Link = ({ children, ariaLabel, href, variant, target = '_blank', className, rel, ...rest }: LinkProps) => {

    const computedRel =
        target === '_blank' ? rel ?? 'noopener noreferrer' : rel;

    return <a aria-label={ariaLabel} href={href} className={LinkClasses[variant]} target={target} rel={computedRel} {...rest}
    >
        {children}
    </a>
}