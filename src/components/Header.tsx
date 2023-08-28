import { useDispatch, useSelector } from "react-redux";
import calendar from "../icons/calendar.png";
import { handleNextMonth, handlePreviousMonth, resetMonth } from "../store/slices/calendarSlice";
import dayjs from "dayjs";

const Header = () => {
    const dispatch = useDispatch();
    const month = useSelector((state: any) => state.month);

    const setPreviousMonth = () => {
        dispatch(handlePreviousMonth(month));
    }
    const setNextMonth = () => {
        dispatch(handleNextMonth(month));
    }
    const handleReset = () => {
        dispatch(resetMonth(month));
    }
    return (
        <header className="px-4 py-2 flex items-center">
            <img src={calendar} alt="calendar" className="mr-2 w-12 h-12" />
            <h1 className="mr-6 text-black-200 text-xl">
                Calendar
            </h1>
            <button
                onClick={handleReset}
                className="border rounded bg-grey-200 mr-2 py-2 px-2"
            >
                Today
            </button>
            <button onClick={setPreviousMonth}>
                <span className="material-icons-outlined text-gray-800 mx-2 mt-2 cursor-pointer">
                    chevron_left
                </span>
            </button>
            <button onClick={setNextMonth}>
                <span className="material-icons-outlined text-gray-800 mx-2 mt-2 cursor-pointer">
                    chevron_right
                </span>
            </button>
            <h2 className="ml-2 text-xl text-black-200 font-bold">
                {dayjs(new Date(dayjs().year(), month)).format(
                    "MMMM YYYY"
                )}
            </h2>
        </header>)
}

export default Header;