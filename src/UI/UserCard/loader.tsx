import ContentLoader from 'react-content-loader'

export const UserCardLoader = () => (
  <ContentLoader
    speed={1}
    width={195}
    height={50}
    viewBox="0 0 195 50"
    backgroundColor="#f5f5f5"
    foregroundColor="#ffffff"
  >
    <rect x="0" y="0" rx="15" ry="15" width="50" height="50" />
    <rect x="60" y="15" rx="10" ry="10" width="120" height="25" />
  </ContentLoader>
)