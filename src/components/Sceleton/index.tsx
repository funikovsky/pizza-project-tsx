import { SceletonBlock } from './SceletonBlock';

export const Sceleton = () => {
  return (
    <>
      {[...new Array(8)].map((_, index) => (
        <SceletonBlock key={index} />
      ))}
    </>
  );
};
