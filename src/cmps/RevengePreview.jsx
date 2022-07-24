import React, { useEffect, useState } from 'react'
import { utilService } from '../services/util.service'

export const RevengePreview = ({ revenge }) => {
    const [dateToDisplay, setDateToDisplay] = useState()
    useEffect(() => {
        const date = utilService.DateToDisplay(revenge.createdAt)
        setDateToDisplay(date)
    }, [])

    return (
        <section className='revenge-preview'>
            <p><b>In whom? </b>{revenge.to}</p>
            <p><b>What to do? </b>{revenge.description}</p>
            <span className='subtext'>{dateToDisplay}</span>
        </section>
    )
}
