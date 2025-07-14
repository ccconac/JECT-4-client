type TravelTypeCardProps = {
    name: string;
    title: string;
    color: string;
    description: string;
    recommend: string;
};

const TravelTypeCard = ({ title, description, recommend }: TravelTypeCardProps) => {
    // name 에 따라 title color 조건부 렌더링
    return (
        <section className="rounded-xl bg-white px-[39px] py-7.5 shadow-md">
            <h3 className="text-point2 text-display">{title}</h3>
            <p className="relative flex flex-col gap-3">
                <span className="text-text-min text-[14px]">{description}</span>
                <hr className="border-primary absolute top-1/2 right-0 left-0 border-0 border-t-[0.3px] border-solid" />
                <span className="text-text-min text-[12px]">{recommend}</span>
            </p>
        </section>
    );
};

export default TravelTypeCard;
