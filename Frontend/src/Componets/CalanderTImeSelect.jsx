import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TimeSlot = ({ time, isSelected, onClick, position }) => {
  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return "rounded-t-lg border-b-0";
      case "middle":
        return "rounded-none border-b-0";
      case "bottom":
        return "rounded-b-lg";
      default:
        return "rounded-lg";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full p-2 border ${getPositionStyles()} ${
        isSelected ? "bg-orange-500 text-white" : "bg-white hover:bg-orange-50"
      } transition-colors`}>
      {time}
    </button>
  );
};

const CalendarModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 p-5 flex items-center justify-center z-50">
      <div className="bg-white w-full h-full md:w-1/2 md:rounded-lg relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
          <IoMdClose className="w-8 h-8" />
        </button>
        <div className="p-4 w-full h-full">{children}</div>
      </div>
    </div>
  );
};

const DayView = ({
  currentDate,
  onNavigate,
  isFullScreen,
  selectedTimes,
  onTimeSelect,
}) => {
  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  const generateDates = () => {
    const dates = [currentDate];
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);

    return [prevDate, currentDate, nextDate];
  };

  const dates = generateDates();

  const arrowClasses = isFullScreen ? "-translate-x-5" : "-translate-x-6";

  const renderTimeSlots = (date) => {
    return (
      <div className="flex flex-col">
        <h4 className="text-center text-lg whitespace-nowrap    font-semibold mb-2">
          {date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}
        </h4>
        <p className="text-center  font-semibold mb-2">
          {date.toLocaleDateString("en-US", { weekday: "long" })}
        </p>
        {timeSlots.map((time, index) => {
          const isSelected = selectedTimes.includes(
            `${date.toDateString()}-${time}`
          );
          let position = "single";
          if (timeSlots.length > 1) {
            if (index === 0) position = "top";
            else if (index === timeSlots.length - 1) position = "bottom";
            else position = "middle";
          }

          return (
            <TimeSlot
              key={`${date.toDateString()}-${time}`}
              time={time}
              isSelected={isSelected}
              onClick={() => onTimeSelect(`${date.toDateString()}-${time}`)}
              position={position}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => onNavigate(-1)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${arrowClasses} w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
        <IoIosArrowBack size={24} />
      </button>

      <div className="px-8">
        <div className="grid grid-cols-3 gap-x-4  max-h-[60vh] overflow-y-auto p-2">
          {dates.map((date, index) => (
            <div  key={date.toDateString()} className="space-y-2">
              {renderTimeSlots(date)}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onNavigate(1)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 ${
          arrowClasses === "-translate-x-5" ? "translate-x-6" : "translate-x-6"
        } w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

const MonthView = ({ currentDate, onNavigate, onDayClick, isFullScreen }) => {
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className=""></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <button
          key={day}
          onClick={() => onDayClick(day)}
          className="p-2 hover:bg-orange-50 rounded-lg transition-colors text-center">
          {day}
        </button>
      );
    }

    return days;
  };

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const arrowClasses = isFullScreen ? "-translate-x-8" : "-translate-x-4";

  return (
    <div className="relative">
      <div className="flex items-center mb-4 px-4">
        <button
          onClick={() => onNavigate(-1, "month")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 ${arrowClasses} w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
          <IoIosArrowBack size={24} />
        </button>
        <div className="flex ">
          <h3 className="text-xl font-semibold  text-center mb-4">
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h3>
        </div>

        <button
          onClick={() => onNavigate(1, "month")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 ${
            arrowClasses === "-translate-x-5"
              ? "translate-x-6"
              : "translate-x-6"
          } w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
          <IoIosArrowForward size={24} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {weekdays.map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
};

const CalanderTimeSelect = ({ isFullScreen = false, onClose }) => {
  const [view, setView] = useState("day");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (amount, type = "day") => {
    const newDate = new Date(currentDate);
    if (type === "month") {
      newDate.setMonth(newDate.getMonth() + amount);
    } else {
      newDate.setDate(newDate.getDate() + amount);
    }
    setCurrentDate(newDate);
  };

  const handleDayClick = (day) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setCurrentDate(newDate);
    setView("day");
  };

  const handleTimeSelect = (time) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleSave = () => {
    console.log("Selected times:", selectedTimes);
    if (onClose) onClose();
   navigate("/tutornavbar/dashboard");
  };

  const calendarContent = (
    <div
      className={`bg-white rounded-xl shadow-lg p-5 ${
        isFullScreen ? "h-full" : ""
      }`}>
      <h1 className="text-2xl font-bold text-center mb-4">
        Set Available Times
      </h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setView("day")}
          className={`px-6 py-2 rounded-lg transition-colors ${
            view === "day"
              ? "bg-orange-500 text-white"
              : "border border-orange-500 text-orange-500"
          }`}>
          Day
        </button>
        <button
          onClick={() => setView("month")}
          className={`px-6 py-2 rounded-lg transition-colors ${
            view === "month"
              ? "bg-orange-500 text-white"
              : "border border-orange-500 text-orange-500"
          }`}>
          Month
        </button>
      </div>

      {view === "day" ? (
        <DayView
          currentDate={currentDate}
          onNavigate={handleNavigate}
          isFullScreen={isFullScreen}
          selectedTimes={selectedTimes}
          onTimeSelect={handleTimeSelect}
        />
      ) : (
        <MonthView
          currentDate={currentDate}
          onNavigate={handleNavigate}
          onDayClick={handleDayClick}
          isFullScreen={isFullScreen}
        />
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSave}
          className="px-3 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
          Done
        </button>
      </div> 
    </div>
  );

  return isFullScreen ? (
    <CalendarModal isOpen={true} onClose={onClose}>
      {calendarContent}
    </CalendarModal>
  ) : (
    <div className="px-2 w-full mx-auto ">
      {calendarContent}
    </div>
  );
};

export default CalanderTimeSelect;
