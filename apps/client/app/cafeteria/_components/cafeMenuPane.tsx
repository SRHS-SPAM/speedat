interface CafeMenuPaneProps {
  title: string;
  data: string[];
}

const CafeMenuPane = ({ title, data }: CafeMenuPaneProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-sm shadow-lg w-[276px] h-[375px]">
      <span className="py-3 text-2xl font-bold">{title}</span>
      <div className="flex-1 flex flex-col p-12 justify-around">
        {data.map((ai, i) => (
          <div key={i} className="font-bold text-lg w-full text-left">
            {ai}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeMenuPane;
