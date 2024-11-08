import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward,  } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

// CalendarModal component for full-screen display
const CalendarModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  p-5 flex items-center justify-center z-50">
      <div className="bg-white w-full h-full md:w-1/2  md:rounded-lg relative overflow-auto">
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

// Rest of the calendar components remain the same...
const ClassTypeButton = ({ time, type }) => {
  const getTypeStyles = () => {
    switch (type) {
      case "one-on-one":
        return "bg-blue-100 border-black/60 text-black/60";
      case "group-4":
        return "bg-blue-100 border-black/60 text-black/60";
      case "group-4-plus":
        return "bg-blue-100 border-black/60 text-black/60";
      default:
        return "border-black/60 text-black/60";
    }
  };

  return (
    <button
      className={`w-full p-2 rounded-lg border ${getTypeStyles()} text-sm hover:opacity-80 transition-opacity`}>
      {time}
      {type && (
        <span className="block text-xs mt-1">
          {type === "one-on-one"
            ? "1-on-1"
            : type === "group-4"
            ? "Group (4)"
            : "Group (4+)"}
        </span>
      )}
    </button>
  );
};

const DayView = ({ currentDate, onNavigate, isFullScreen }) => {
  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const sampleSchedule = (date) => [
    { time: "9:00 AM", type: "one-on-one" },
    { time: "10:00 AM", type: "group-4" },
    { time: "2:00 PM", type: "group-4-plus" },
    { time: "4:00 PM", type: "" },
  ];

  const arrowClasses = isFullScreen ? "-translate-x-5" : "-translate-x-6";

  return (
    <div className="relative">
      <button
        onClick={() => onNavigate(-3)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${arrowClasses} w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
        <IoIosArrowBack size={24} />
      </button>

      <div className="grid grid-cols-3 gap-4 px-4">
        {getDates().map((date) => (
          <div key={date.toISOString()} className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg whitespace-nowrap font-semibold">
                {date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </h3>
              <p className="text-gray-500">
                {date.toLocaleDateString("en-US", { weekday: "long" })}
              </p>
            </div>
            <div className="space-y-2">
              {sampleSchedule(date).map((session, idx) => (
                <ClassTypeButton
                  key={idx}
                  time={session.time}
                  type={session.type}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => onNavigate(3)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 ${
          arrowClasses === "-translate-x-5" ? "translate-x-6" : "translate-x-6"
        } w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

const MonthView = ({ currentDate, onNavigate, onDayClick, isFullScreen }) => {
  // ... MonthView implementation remains the same ...
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay();

    return { daysInMonth, firstDayOfWeek };
  };

  const { daysInMonth, firstDayOfWeek } = getDaysInMonth(currentDate);

  const handleDayClick = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    onDayClick(selectedDate);
  };

  const arrowClasses = isFullScreen ? "-translate-x-8" : "-translate-x-4";

  return (
    <div className="relative">
      <button
        onClick={() => onNavigate(-1, "month")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${arrowClasses} w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
        <IoIosArrowBack size={24} />
      </button>

      <div className="px-4">
        <h3 className="text-xl font-semibold text-center mb-4">
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array(firstDayOfWeek)
            .fill(null)
            .map((_, idx) => (
              <div key={`empty-${idx}`} className="aspect-square" />
            ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              onClick={() => handleDayClick(day)}
              className="border rounded-lg p-1 aspect-square hover:bg-gray-50 cursor-pointer">
              <div className="text-sm font-medium mb-1">{day}</div>
              <div className="space-y-1">
                {day % 3 === 0 && <div className="h-1 bg-primary/70 rounded" />}
                {day % 4 === 0 && <div className="h-1 bg-primary/70 rounded" />}
                {day % 5 === 0 && <div className="h-1 bg-primary/70 rounded" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onNavigate(1, "month")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 ${
          arrowClasses === "-translate-x-4" ? "translate-x-4" : "translate-x-6"
        } w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

const CustomCalendar = ({ isFullScreen = false, onClose }) => {
  const [view, setView] = useState("day");
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNavigate = (amount, type = "day") => {
    const newDate = new Date(currentDate);
    if (type === "month") {
      newDate.setMonth(newDate.getMonth() + amount);
    } else {
      newDate.setDate(newDate.getDate() + amount);
    }
    setCurrentDate(newDate);
  };

  const handleDayClick = (date) => {
    setCurrentDate(date);
    setView("day");
  };

  const calendarContent = (
    <div
      className={`bg-white rounded-xl shadow-lg p-4 ${
        isFullScreen ? "h-full" : ""
      }`}>
      <h1 className="text-2xl font-bold text-center mb-4">My Schedule</h1>

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
        />
      ) : (
        <MonthView
          currentDate={currentDate}
          onNavigate={handleNavigate}
          onDayClick={handleDayClick}
          isFullScreen={isFullScreen}
        />
      )}
      <div className="my-2 flex justify-center">
        <button className="p-2 bg-primary px-4 w-20 font-bold rounded-md text-white">Set</button>
      </div>
    </div>
  );

  return isFullScreen ? (
    <CalendarModal isOpen={true} onClose={onClose}>
      {calendarContent}
    </CalendarModal>
  ) : (
    <div className="max-w-4xl mx-auto transform scale-75 md:scale-90">
      {calendarContent}
    </div>
  );
};

export default CustomCalendar;
