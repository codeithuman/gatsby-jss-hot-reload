import React from 'react'
import injectSheet from 'react-jss'

const fullScreenContainer = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
}

const styles = {
  masterContainer: {
    ...fullScreenContainer,
    backgroundColor: 'black',
  },
}

const IndexPage = (props) => {
  const {classes} = props
  return (
    <div className={classes.masterContainer}>
    </div>
)}

export default injectSheet(styles)(IndexPage)