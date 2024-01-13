import { BiLogoWhatsapp } from "react-icons/bi"
const Contacts = () => {
    return (
        <>
            <div style={{ position: 'fixed', zIndex: 3, bottom: "30px", right: "30px" }} className='btn-success btn rounded-3'>
                <BiLogoWhatsapp size={30}/>
            </div>
        </>
    )
}

export default Contacts