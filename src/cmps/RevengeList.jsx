import React from 'react'
import { RevengePreview } from './RevengePreview'

export const RevengeList = ({ revenges }) => {
    return (
        <section className='revenge-list'>
            {revenges.map(revenge => <RevengePreview revenge={revenge} key={revenge._id} />)}
        </section>
    )
}
