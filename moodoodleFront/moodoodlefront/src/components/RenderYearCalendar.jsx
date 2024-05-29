import React from 'react';

export default function RenderYearCalendar({ monthlyList, month }) {
  const monthData = monthlyList.find((m) => m.month === month);

  if (!monthData || !monthData.data) {
    return <div className='w-[11.6px] h-[11.6px] rounded-[3px] bg-gray-scale-1' />;
  }

  return (
    <div className='flex flex-col w-[168px] h-[459px] justify-between'>
      <div className='flex flex-col justify-between'>
        <div key={month} className='flex flex-col h-[459px] gap-[3.3px]'>
          {monthData.data.map((data) =>
            data.main_mood_color !== null ? (
              <div key={data.date} className={`w-[11.6px] h-[11.6px] rounded-[3px] bg-[#${data.main_mood_color}]`} />
            ) : (
              <div key={data.date} className='w-[11.6px] h-[11.6px] rounded-[3px] bg-gray-scale-1' />
            )
          )}
        </div>
      </div>
    </div>
  );
}
