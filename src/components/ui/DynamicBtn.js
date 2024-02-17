export default function DynamicBtn({children, btnClass}){
  return(
      <button className={`px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 bg-orange hover:brightness-110 font-semibold text-white rounded-md capitalize ${btnClass}`}>
        {children}
      </button>
  );
};