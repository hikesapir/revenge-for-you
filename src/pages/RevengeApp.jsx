import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RevengeList } from '../cmps/RevengeList'
import { loadRevenges } from '../store/actions/revengeActions'

export const RevengeApp = () => {
    const { revenges } = useSelector(state => state.revengeModule)
    return (
        <section>
            <RevengeList revenges={revenges} />
        </section>
    )
}
