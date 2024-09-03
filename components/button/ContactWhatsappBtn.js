export default function ContactWhatsappBtn({children, msg="Hola, me contactó desde su página. Me interesa ...", className}){
    const phone = " 1151429490";
    const message = msg;
    return (
        <div className="">
            <a href={`https://web.whatsapp.com/send/?phone=${phone}&text=${message}`} className={className} target="_blank">{children}</a>
        </div>
    )
}