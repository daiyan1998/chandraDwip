import Image from "next/image";

 const ReverseProfile= ({profileObject}) => {
    const {image,name ,DesignationBold ,Designation ,PostBold ,Post ,Description} = profileObject;

    return (
        <div className="w-full flex gap-5  pt-5 my-5 justify-center items-center">
            
            <div className="w-1/2 space-y-3 text-left">
                <h1 className="text-[#e46f25] font-extrabold text-2xl">{name}</h1>
                <h3><span className="font-bold">{DesignationBold}</span> <span>{Designation}</span></h3>
                <h3><span className="font-bold text-sm">{PostBold}</span> {Post}</h3>
                <p className="pr-4 text-left">{Description}</p>
                
            </div>
            <div className="w-1/2 right-0">
                <div className="flex justify-end"><Image
                src={image}
                alt="profile image"
                width={500}
                height={500}
                ></Image></div>

            </div>       
            
        </div>
    );
};

export default ReverseProfile;