import React from 'react'
import { RevengePreview } from './RevengePreview'

export const RevengeList = ({ revenges }) => {
    return (
        <div>
            {revenges.map(revenge => <RevengePreview revenge={revenge} key={revenge._id} />)}
        </div>
    )
}
