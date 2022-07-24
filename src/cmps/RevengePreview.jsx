import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { removeRevenge, saveRevenge } from '../store/actions/revengeActions'

export const RevengePreview = ({ revenge }) => {
    const dispatch = useDispatch()
    const [dateToDisplay, setDateToDisplay] = useState()
    const [isHover, setIsHover] = useState(false)
    useEffect(() => {
        const date = utilService.DateToDisplay(revenge.createdAt)
        setDateToDisplay(date)
    }, [])

    const updateRevenge = () => {
        const revengeToUpdate = JSON.parse(JSON.stringify(revenge))
        revengeToUpdate.isDone = true
        dispatch(saveRevenge(revengeToUpdate))
    }

    const deleteRevenge = () => {
        console.log('hahaha');
        dispatch(removeRevenge(revenge._id))

    }

    return (
        <section className='revenge-preview' onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <section className={isHover ? 'actions' : 'actions hide'}>
                <button className='success-bgc' onClick={updateRevenge}>Done</button>
                <button className='danger-bgc' onClick={deleteRevenge}>Remove</button>
            </section>
            <section>
                <p><b>In whom? </b>{revenge.to}</p>
                <p><b>What to do? </b>{revenge.description}</p>
                <span className='subtext'>{dateToDisplay}</span>
            </section>
            {(revenge.isDone) && <section className='done'><h1>DONE</h1></section>}

        </section>
    )
}
