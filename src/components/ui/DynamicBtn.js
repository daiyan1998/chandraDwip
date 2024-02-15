export default function DynamicBtn({children, btnClass}){
  return(
      <button className={`px-8 py-4 bg-orange hover:brightness-110 font-semibold text-white rounded-md capitalize ${btnClass}`}>
        {children}
      </button>
  );
};