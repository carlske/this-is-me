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

const variantClasses: Record<LinkVariant, string> = {
    primary: 'hover:cursor-pointer border-[3px] border-wasabi hover:border-matcha hover:bg-matcha hover:text-deep-black p-3 rounded-xl',
    secondary: 'hover:cursor-pointer dak:bg-matcha  bg-rice text-deep-black b hover:opacity-90 p-3 rounded-xl  border  border-[1px]  ',
    ghost: '',
};

export const Link = ({ children, ariaLabel, href, variant, target = '_blank', className, rel, ...rest }: LinkProps) => {

    const computedRel =
        target === '_blank' ? rel ?? 'noopener noreferrer' : rel;

    return <a aria-label={ariaLabel} href={href} className={variantClasses[variant]} target={target} rel={computedRel} {...rest}
    >
        {children}
    </a>
}