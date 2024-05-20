interface CafeMenuPaneProps {
  title: string;
  data: string[];
}

const CafeMenuPane = ({ title, data }: CafeMenuPaneProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-inner w-[400px] h-[500px] p-8">
      <span className="h-[50px] text-3xl font-bold">{title}</span>
      <div className="flex-1 flex flex-col justify-around">
        {data.map((ai, i) => (
          <div key={i} className="font-bold">
            {ai}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeMenuPane;
