import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  const framesPerSecond = 30;
  const totalDurationInSeconds = 240;
  const durationInFrames = framesPerSecond * totalDurationInSeconds;

  return (
    <>
      <Composition
        id="MyComposition"
        durationInFrames={durationInFrames}
        fps={framesPerSecond}
        width={1920}
        height={1080}
        component={MyComposition}
      />
    </>
  );
};