export default function Logo({ medida, clases }) {
  const imgPath = "/imgs/redlogo/rllogo.webp";

  return (
    <div>
      <img
        src={imgPath}
        alt="logo red logística"
        width={medida || 50}
        height={medida || 50}
        className={clases}
      />
    </div>
  );
}
