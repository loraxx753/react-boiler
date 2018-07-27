import React from 'react'

export const ObjectMap = props =>
  Object.keys(props.input).map((key, i) => (
    <React.Fragment key={i}>
      {props.children(props.input[key], key, i)}
    </React.Fragment>
  ))
