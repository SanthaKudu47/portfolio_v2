import useScreenHeight from "@hooks/screenHeight";

export default function ArtWorkLg() {
  const height = useScreenHeight();
  return <div>{height}</div>;
}
