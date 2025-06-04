import { Children, isValidElement } from "react";

interface HeadingWithLineProps {
    children: React.ReactNode;
    tag?: 'h1' | 'h2' | 'h3' | 'p';
    color: 'matcha' | 'rice';
    lineColor: 'pink' | 'wasabi';
    animation: 'true' | 'false';
    position: 'baseline' | 'center';
    className?: string;
}

const colorMap = {
    matcha: 'text-matcha',
    pink: 'text-core-pink',
    wasabi: 'text-wasabi',
    rice: 'text-rice',
};


const HeadingWithLine = ({ children, tag = 'p', color = 'matcha', lineColor = 'pink', className, animation = 'false', position = 'baseline' }: HeadingWithLineProps) => {
    const Tag = tag

    const fontColor = colorMap[color] || 'text-matcha';
    let text = '';

    if (isValidElement(children)) {
        const value = (children.props as { value: string }).value;
        text = String(value);
    }

    text = text.replace(" ","_")

    return (<div className={`letter-line ${position === 'center'? 'letter-line--center' : 'letter-line--baseline' }  ${animation === 'true' ? 'letter-line--animation' : ''}  ${className} ${fontColor}`}>
        <Tag>{text}</Tag>
    </div>)
}



export default HeadingWithLine;