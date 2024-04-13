export default function Logo({ medida, clases }) {

  const dev_url = process.env.DEV_URL+"/imgs/redlogo/rllogo.webp";
  const prod_url = "imgs/redlogo/rllogo.webp";
  const image_path = dev_url ? dev_url : prod_url;

  return (
    <div>
      <img
        src={image_path}
        alt="logo red logística"
        width={medida || 50}
        height={medida || 50}
        className={clases}
      />
    </div>
  );
}
