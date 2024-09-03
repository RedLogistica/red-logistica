export default function Section({ children, className = "", ...props }) {
    return (
        <section  {...props} className={"min-h-screen w-full"}>
            <section className={`px-2 py-4 max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto ${className}`}>
                {children}
            </section>
        </section>
    )
}