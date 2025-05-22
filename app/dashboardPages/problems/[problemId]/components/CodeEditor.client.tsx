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
    <div className='border-2 justify-center items-center bg-amber-200 rounded-2xl p-5 m-5'>
        <Editor
            height={props.height || "70vh"}
            defaultLanguage={props.defaultLanguage || "C"}
            defaultValue={props.defaultValue || "// some comment"}
        />
        <MainButton Name='Run Code' />
    </div>
  )
}

export default CodeEditor;