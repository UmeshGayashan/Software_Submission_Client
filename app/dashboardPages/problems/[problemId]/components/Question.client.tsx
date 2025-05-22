import React from 'react'

type Props = {
    Problem: string
    ProblemId: string
    Image?: string
    Description?: string
}

function Question(props: Props) {
  return (
    <div>
      <h1 className='text-2xl font-bold p-1.5'>{props.Problem}</h1>
      <p className='p-1.5'>{props.Description}</p>
      <img src={props.Image} alt={props.Problem} />
    </div>
  )
}

export default Question