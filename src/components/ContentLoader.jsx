import React from 'react'
import ContentLoader from 'react-content-loader'

// eslint-disable-next-line react/prop-types
export default ({ loading }) => loading ? (
  <>
    <ContentLoader
      height={475}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      className="d-sm-block d-xl-none"
    >
      <rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
      <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
    <ContentLoader
      height={507}
      width={900}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      className="d-none d-lg-block"
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
) : <></>