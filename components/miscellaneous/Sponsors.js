export default function Sponsors() {
  return (
    <div
      className="w-full"
      data-aos="zoom-in-"
      data-aos-duration="800"
      data-aos-anchor-placement="center-bottom"
      data-aos-easing="linear"
    >
      <section className="flex flex-col flex-nowrap items-center min-h-screen py-20">
        <hgroup>
          <h2 className="text-4xl py-5">SPONSORS</h2>
        </hgroup>
        <div className="flex flex-row flex-wrap gap-3 items-center">
          <div className="avatar">
            <div className="w-20 rounded-full shadow">
              <img src="imgs/sponsors/hubloglogo.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-20 rounded-full shadow">
              <img src="imgs/sponsors/conurbanialogo.webp" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
