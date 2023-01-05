import {
    facebook,
    google,
    linkedin,
    phone,
    rss,
    location,
    fax,
    instagram,
    pinterest,
    twitter,
    youtube
    } from "../assets/index" 

const Footer = () => {
    return ( 
        <div className="mt-40 px-40">
            <div className="border-primary border-b-2"></div>
            <div className="w-full py-20 px-20 flex flex-row justify-between">
                <div className="font-interb text-[40px] text-secondary leading-[54px]">
                    Logo
                </div>
                <div className="w-1/2">
                    <div className="flex flex-row gap-3  pb-3">
                        <div>
                            <img src={location} alt="" />
                        </div>
                        <div className="text-secondary font-normal text-[14px]">345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</div>
                    </div>
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-row gap-3  pb-3">
                            <div>
                                <img src={phone} alt="" />
                            </div>
                            <div className="text-secondary font-normal text-[14px]">(123) 456-7890</div>
                        </div>
                        <div className="flex flex-row gap-3  pb-3">
                            <div>
                                <img src={fax} alt="" />
                            </div>
                            <div className="text-secondary font-normal text-[14px]">(123) 456-7890</div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-start items-center pt-10 gap-5">
                        <div className="font-light text-secondary text-[14px] opacity-50">
                            Social Media
                        </div>
                        <div>
                            <img src={facebook} alt="" />
                        </div>
                        <div>
                            <img src={twitter} alt="" />
                        </div>
                        <div>
                            <img src={linkedin} alt="" />
                        </div>
                        <div>
                            <img src={youtube} alt="" />
                        </div>
                        <div>
                            <img src={instagram} alt="" />
                        </div>
                        <div>
                            <img src={google} alt="" />
                        </div>
                        
                        <div>
                            <img src={pinterest} alt="" />
                        </div>
                        <div>
                            <img src={rss} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[#7BB9FC] border-b-2 opacity-20"></div>
            <div className="flex py-10 justify-between items-center ">
                <div className="flex items-center gap-8 pl-4">
                    <div className="font-inter font-normal uppercase text-[14px] text-secondary">About us</div>
                    <div className="font-inter font-normal uppercase text-[14px] text-secondary">Contact us</div>
                    <div className="font-inter font-normal uppercase text-[14px] text-secondary">Help</div>
                    <div className="font-inter font-normal uppercase text-[14px] text-secondary">Privacy Policy</div>
                    <div className="font-inter font-normal uppercase text-[14px] text-secondary">Disclaimer</div>
                </div>
                <div className="font-inter font-normal uppercase text-[14px] text-secondary opacity-50">
                    Copyright © 2020 Minimumlivingcost. All rights reserved
                </div>
            </div>

        </div>
     );
}
 
export default Footer;