interface ChipButtonProps {
    skillId: number
}

const ChipButton = ({ skillId }: ChipButtonProps) => {
    
    const shoeMoreChips = () => {
    alert('You clicked me!');
    }

    return <span className="bg-wasabi hover:cursor-pointer hover:bg-matcha text-deep-black font-bold rounded-lg p-2 mr-1.5 text-xs " key={skillId} onClick={shoeMoreChips} >Show more
    </span>;
}
export default ChipButton;