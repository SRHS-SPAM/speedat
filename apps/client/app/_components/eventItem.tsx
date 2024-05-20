import { MoveRight } from "lucide-react";

interface EventItemProps {
  title: string;
  dateStart: string;
  dateEnd: string;
  content: React.JSX.Element;
}

const EventItem = ({ title, dateStart, dateEnd, content }: EventItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-4xl font-black">{title}</span>
      <hr />
      <div className="flex items-center justify-center gap-12 text-2xl font-bold">
        <span>{dateStart}</span>
        <MoveRight />
        <span>{dateEnd}</span>
      </div>
      <hr />
      <div className="px-4">{content}</div>
      <hr />
    </div>
  );
};

export default EventItem;
