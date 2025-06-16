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
        alert('You clicked me!');
    }

    return <span className="bg-wasabi hover:cursor-pointer hover:bg-matcha text-deep-black font-bold rounded-lg p-2 mr-1.5 text-xs " onClick={shoeMoreChips} >Show more
    </span>

        ;
}

export const ChipList = ({ skills }: ChipListProps) => {
  return (
    <>
      {skills.slice(0, 2).map((skill) => (
        <Chip key={skill} skill={skill} />
      ))}
      <ChipButton/>
    </>
  );
};