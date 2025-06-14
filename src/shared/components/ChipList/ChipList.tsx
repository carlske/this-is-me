import Chip from "../Chip/Chip";
import ChipButton from "../ChipButton/ChipButton";

interface ChipListProps {
    skills: string[]
}

const ChipList = ({ skills }: ChipListProps) => {

    const showMoreChips = () => {
        const visibleChips = skills.slice(0, 2).map((skill, i) => (
            <Chip key={i} skill={skill} />
        ))

        visibleChips.push(
            <ChipButton key={skills.length + 1} skillId={skills.length +1}/>
        )
        return visibleChips
    }

    return <>
        {showMoreChips()}
    </>
}

export default ChipList;