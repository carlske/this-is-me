
interface ChipProps {
    skill: string
}


interface ChipListProps {
    skills: string[]

}



export const Chip = ({ skill }: ChipProps) => {
    return <span className="bg-core-pink text-rice font-bold rounded-lg p-2 mr-1.5 text-xs "> {skill} </span>;
}


export const ChipButton = () => {

    const shoeMoreChips = () => {
        console.log("wow")
    }

    return <span className="dark:bg-wasabi  bg-rice hover:opacity-80 hover:cursor-pointer dark:hover:bg-matcha dark:text-deep-black font-bold rounded-lg p-2 mr-1.5 text-xs " onClick={shoeMoreChips} >Show more
    </span>

        ;
}

export const ChipList = ({ skills }: ChipListProps) => {

    return (
        <>
            {skills.slice(0, 3).map((skill) => (
                <Chip key={skill} skill={skill} />
            ))}
            <ChipButton />
        </>
    );
};