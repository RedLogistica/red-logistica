export default function SocialMedia() {
  return (
    <section className="flex flex-col flex-nowrap text-center items-center w-full py-10">
      <h3 className="footer-title text-4xl mb-5">Redes Sociales</h3>
      <div className="flex flex-nowrap gap-2 md:gap-5">
      <Link
          href={"https://www.instagram.com/redlogistica23/"}
          target="_blank"
          className="btn btn-ghost text-2xl text-pink-700"
        >
          <FaInstagram />
        </Link>
      </div>
    </section>
  );
}
