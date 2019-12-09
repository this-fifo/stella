import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const LoaderCard = ({ user }) => {
  const message =
    user === ''
      ? `Loading starred repos ... ( •ॢ◡-ॢ)-♡ ☆.。.:*・°☆.。.:*・°☆`
      : `Seems like ${user} haven't starred any repos yet (╥﹏╥)`;

  return (
    <>
      <h5>{message}</h5>
      <ContentLoader
        height={507}
        width={900}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
        <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
        <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
        <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
        <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
        <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
        <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
        <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
      </ContentLoader>
    </>
  );
};

LoaderCard.propTypes = {
  user: PropTypes.string.isRequired,
};

export default LoaderCard;
