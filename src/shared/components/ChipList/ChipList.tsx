import Chip from "../Chip/Chip";

interface ChipListProps {
    skills : string[]
}

const ChipList = ({skills}: ChipListProps) => {
    return <>
        {skills.map((skill, i) => {
            return <Chip key={i} skill={skill}></Chip>
        })}
    </>
}

export default ChipList;