
export default function Logo({ medida, clases }) {
  return (
    <div>
      <img
        src={"/imgs/redlogo/rllogo.webp"}
        alt="logo red logística"
        width={medida || 50}
        height={medida || 50}
        className={clases}
      />
    </div>
  );
}
