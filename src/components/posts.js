import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'

const Posts = ({ postsToRender }) => {
  return (
    <GridList cellHeight={260} className='grid-style' cols={3}>
      {postsToRender.map((tile) => (
        <GridListTile key={tile.img_src} cols={tile.cols || 1}>
          <img src={tile.img_src} alt={tile.id} />
        </GridListTile>
      ))}
    </GridList>
  )
}
export default Posts
