export default function BgPattern({
  fill = "#ABA9B4",
  cls,
  opacity = 1,
  id = "dotGrid",
}: {
  fill?: string;
  cls?: string;
  opacity?: number;
  id: string;
}) {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"  className={`absolute ${cls}`}>
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          
          
        >
          <circle cx="1" cy="1" r="0.8" fill={fill} />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        opacity={opacity}
       
      />
    </svg>
  );
}
