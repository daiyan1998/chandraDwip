import Image from "next/image";

 const ReverseProfile= ({profileObject}) => {
    const {image,name ,DesignationBold ,Designation ,PostBold ,Post ,Description} = profileObject;

    return (
        <div className="w-full  flex  flex-col-reverse lg:flex-row   pt-5 my-5 justify-between items-center">
            
            <div className="lg:w-1/2 w-3/4 mx-auto space-y-3 text-left mb-10">
                <h1 className="text-[#e46f25] font-extrabold text-xl lg:text-2xl">{name}</h1>
                <h3><span className="text-base lg:text-xl font-bold">{DesignationBold}</span> <span className="text-sm font-medium">{Designation}</span></h3>
                <h3><span className="font-bold text-base lg:text-xl">{PostBold}</span><span className="text-sm font-medium"> {Post}</span></h3>
                <p className="pr-4 text-sm lg:text-base  font-medium text-left">{Description}</p>
                
            </div>
            <div className="lg:w-1/2 w-3/4  mb-10 ">
                    <Image
                    className="lg:ml-20  "
                src={image}
                alt="profile image"
                width={500}
                height={500}
                ></Image>

            </div>       
            
        </div>
    );
};

export default ReverseProfile;