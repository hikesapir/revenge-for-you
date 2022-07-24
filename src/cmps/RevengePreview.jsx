import React, { useEffect, useState } from 'react'
import { utilService } from '../services/util.service'

export const RevengePreview = ({ revenge }) => {
    const [dateToDisplay, setDateToDisplay] = useState()
    const [isHover, setIsHover] = useState(false)
    useEffect(() => {
        const date = utilService.DateToDisplay(revenge.createdAt)
        setDateToDisplay(date)
    }, [])

    const setHover = () => {
        console.log(isHover);
        setIsHover(true)
    }

    return (
        <section className='revenge-preview' onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <section className={isHover ? 'actions' : 'actions hide'}>
                <button className='success-bgc'>Done</button>
                <button className='danger-bgc'>Remove</button>
            </section>
            <section>
                <p><b>In whom? </b>{revenge.to}</p>
                <p><b>What to do? </b>{revenge.description}</p>
                <span className='subtext'>{dateToDisplay}</span>
            </section>
        </section>
    )
}
