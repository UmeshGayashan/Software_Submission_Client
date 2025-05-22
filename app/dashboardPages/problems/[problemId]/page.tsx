import React from 'react'
import Question from './components/Question.client'
import CodeEditor from './components/CodeEditor.client'

function page() {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <Question
        Problem="Sample Problem"
        ProblemId="1"
        Description="This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description.This is a sample problem description."
        Image="/Software_Assignment_Submission.png"
      />
      <CodeEditor />
    </div>
  )
}

export default page