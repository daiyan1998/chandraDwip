export default function primaryButton({children, btnClass}){
  return(
      <button className={`px-8 py-4 bg-orange text-white rounded-md ${btnClass}`}>
        {children}
      </button>
  );
}