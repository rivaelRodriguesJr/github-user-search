import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={870}
    height={303}
    viewBox="0 0 870 303"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="23" rx="2" ry="2" width="870" height="303" />
  </ContentLoader>
)

export default InfoLoader