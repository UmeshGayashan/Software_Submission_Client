'use client'
import React from 'react'
import Editor from '@monaco-editor/react';
import MainButton from '@/app/components/mainButton';

type Props = {
    defaultValue?: string
    defaultLanguage?: string
    defaultPath?: string
    value?: string
    language?: string
    path?: string
    theme?: string
    line?: number
    loading?: boolean
    options?: object
    overrideServices?: object
    saveViewState?: boolean
    keepCurrentModel?: boolean
    width?: number | string
    height?: number | string
    className?: string
    wrapperProps?: object
}

function CodeEditor(props: Props) {
  return (
    <div className='border-2 rounded-2xl px-5 pt-5 pb-2 m-5'>
        <Editor className='pb-5 flex flex-col'
            height={props.height || "70vh"}
            width={props.width || "80vh"}
            defaultLanguage={props.defaultLanguage || "c"}
            defaultValue={props.defaultValue || "#include <stdio.h>\nint main() {\n\tprintf(\"Hello World\");\n\treturn 0;\n}"}
        />
        <MainButton Name='Run Code' />
    </div>
  )
}

export default CodeEditor;