import dayjs from "dayjs";


const Day = ({ day, rowIndex }: any) => {

    const getClassOfCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue-200 text-white rounded-full w-7"
            : "";
    }

    return <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
            {rowIndex === 0 && (<p className="text-sm pt-1">{day.format("ddd").toUpperCase()}</p>)}
            <p className={`text-sm p-1 my-1 text-center ${getClassOfCurrentDay()}`}>
                {day.format("DD")}
            </p>
        </header>
    </div>
}

export default Day;