'use client';

export default function DynamicBtn({children, btnClass}){
  return(
      <button className={`px-4 py-2 bg-orange hover:brightness-110 font-semibold text-white rounded-md capitalize ${btnClass}`}>
        {children}
      </button>
  );
};