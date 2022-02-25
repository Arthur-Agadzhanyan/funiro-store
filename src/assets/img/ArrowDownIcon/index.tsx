import React from 'react'

interface Props {
    className?: string
}

function ArrowDownIcon({className}: Props) {
    return (
        <svg className={className ? className : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 7.50012L10 13.3335L4.16668 7.50012" stroke="#3A3A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default ArrowDownIcon

