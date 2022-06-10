import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const SceletonBlock: FC = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="138" cy="125" r="125" />
      <rect x="0" y="296" rx="15" ry="15" width="280" height="32" />
      <rect x="0" y="345" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="447" rx="10" ry="10" width="95" height="30" />
      <rect x="130" y="447" rx="26" ry="26" width="152" height="45" />
    </ContentLoader>
  );
};
