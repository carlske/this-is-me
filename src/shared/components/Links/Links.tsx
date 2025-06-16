interface LinkProps {
    children: React.ReactNode
    link: string | undefined;
    ariaLabel?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
}

export const LinkPrimary = ({ children, link, target, rel }: LinkProps) => {
    return <a href={link} className='button primary' target={target} rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
    >
        {children}
    </a>
}


export const LinkSecundary = ({ children, link, target, rel }: LinkProps) => {
    return <a href={link} className='button secundary' target={target} rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
    >
        {children}
    </a>
}