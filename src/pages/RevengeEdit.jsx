import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { revengeService } from '../services/revenge.service'
import { saveRevenge } from '../store/actions/revengeActions'

export const RevengeEdit = ({ match, history }) => {
  const dispatch = useDispatch()
  const [revenge, handleChange, setRevenge] = useForm(null)

  useEffect(() => {
    loadRevenge()
  }, [])


  const loadRevenge = async () => {
    const id = match.params.id
    const revenge = id ? await revengeService.getById(id) : revengeService.getEmptyRevenge()
    console.log(revenge);
    setRevenge(revenge)
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    await dispatch(saveRevenge(revenge))
    setRevenge(revengeService.getEmptyRevenge())
    history.push('/')
  }

  if (!revenge) return <div>Loading...</div>

  return (
    <section className='revenge-edit'>
      <form onSubmit={onSubmit}>
        <label>
          <b>In whom I'll revnge?</b>
          <input type="text" onChange={handleChange} value={revenge.to} name='to' />
        </label>
        <label>
          <b>How will I revnge?</b>
          <input type="text" onChange={handleChange} value={revenge.description} name='description' />
        </label>
        <button>Submit</button>
      </form>

    </section>
  )
}
