import TooltipWrapper from "@components/tooltip/wrapper";

export default function DockIcon({
  text,
  Icon,
  onClick,
}: {
  text: string;
  Icon: React.ComponentType;
  onClick?: () => void;
}) {
  return (
    <div className="dock-icon-wrapper">
      <div className="z-10 absolute left-0 right-0 bottom-0 h-20 w-10 mb-4">
        <TooltipWrapper anchor="TOP" text={text}>
          <div className="relative w-full h-full"/>
        </TooltipWrapper>
      </div>
      <div className="dock-icon-wrapper-bg">
        <button className="p-0 m-0" onClick={onClick}>
          <Icon />
        </button>
      </div>
    </div>
  );
}
