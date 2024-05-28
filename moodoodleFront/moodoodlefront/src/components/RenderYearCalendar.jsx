import React from 'react';

export default function RenderYearCalendar({ monthlyList, month }) {
  return (
    <div className='flex flex-row w-[168px] h-[459px] justify-between'>
      <div className='flex flex-col justify-between'>
        <div key={month} className={`flex flex-col h-[459px] gap-[2px]`}>
          {Object.values(monthlyList[month - 1].month) ? (
            Object.values(monthlyList[month - 1].data).map((data) =>
              data.main_mood_color !== null ? (
                <div key={data.date} className={`w-[11.6px] h-[11.6px] rounded-[3px] bg-[#${data.main_mood_color}]`} />
              ) : (
                <div key={data.date} className='w-[11.6px] h-[11.6px] rounded-[3px] bg-gray-scale-1' />
              )
            )
          ) : (
            <div className='w-[11.6px] h-[11.6px] rounded-[3px] bg-gray-scale-1' />
          )}
        </div>
      </div>
    </div>
  );
}
