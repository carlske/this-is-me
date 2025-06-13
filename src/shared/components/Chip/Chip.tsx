interface ChipProps {
    skill: string
}

const Chip = ({ skill }: ChipProps) => {
    return <span className="bg-core-pink text-rice font-bold rounded-lg p-2 mr-1.5 text-xs " key={skill} > {skill} </span>;
}

export default Chip