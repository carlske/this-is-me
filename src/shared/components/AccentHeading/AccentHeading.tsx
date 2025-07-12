import { isValidElement } from 'react'

interface AccentHeadingTitleProps {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'p'
  color: 'matcha' | 'rice' | 'wasabi' | 'pink' | 'deepblack' | 'industrial'
  animation: 'true' | 'false'
  position: 'baseline' | 'center'
  className?: string
}

const colorMap = {
  matcha: 'text-matcha',
  pink: 'text-core-pink',
  wasabi: 'text-wasabi',
  rice: 'text-rice',
  deepblack: 'text-deep-black',
  industrial: 'text-industrial',
}

const AccentHeadingTitleBase = ({
  children,
  tag = 'p',
  color = 'matcha',
  className,
  animation = 'false',
  position = 'baseline',
}: AccentHeadingTitleProps) => {
  const Tag = tag

  const fontColor = colorMap[color] || 'text-matcha'
  let text = ''

  if (isValidElement(children)) {
    const value = (children.props as { value: string }).value
    text = String(value)
  }

  text = text.replace(' ', '_')

  return (
    <div
      className={`letter-line ${position === 'center' ? 'letter-line--center' : 'letter-line--baseline'} ${animation === 'true' ? 'letter-line--animation' : ''} ${className} ${fontColor}`}
    >
      <Tag>{text}</Tag>
    </div>
  )
}

export const AccentHeadingTitle = (props: Omit<AccentHeadingTitleProps, 'tag'>) => (
  <AccentHeadingTitleBase {...props} tag="h1" />
)

export const AccentHeadingSubtitle = (props: Omit<AccentHeadingTitleProps, 'tag'>) => (
  <AccentHeadingTitleBase {...props} tag="h2" />
)

export const AccentHeadingSubheading = (props: Omit<AccentHeadingTitleProps, 'tag'>) => (
  <AccentHeadingTitleBase {...props} tag="h3" />
)

export const AccentHeadingText = (props: Omit<AccentHeadingTitleProps, 'tag'>) => (
  <AccentHeadingTitleBase {...props} tag="p" />
)
