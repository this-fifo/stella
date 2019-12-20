import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import ContentLoader from './ContentLoader'

const LoaderCard = ({ user, loading }) => {
  const [doneTyping, setDoneTyping] = useState(false)
  const message = loading
    ? ['Loading starred repos ...', '( •ॢ◡-ॢ)-♡ ☆.。.:*・°☆.。.:*・°☆']
    : [
        'Oh, no!',
        `Seems like ${user} haven't starred any repos yet ... (╥﹏╥) `,
        'Maybe try another user ?',
      ]

  const options = {
    strings: !doneTyping ? message : ['->'],
    typeSpeed: !doneTyping ? 20 : 100,
    backSpeed: 20,
    onComplete: () => {
      setTimeout(() => {
        if (!loading) setDoneTyping(true)
      }, 1000)
    },
  }

  const ref = createRef()

  useEffect(() => {
    const typed = new Typed(ref.current, options)
    return () => typed.destroy()
  }, [ref, options, loading])

  return (
    <>
      <h5 ref={ref}> </h5>
      {doneTyping && !loading ? <Link to="/">Return to home</Link> : <></>}
      <ContentLoader loading />
    </>
  )
}

LoaderCard.propTypes = {
  user: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default LoaderCard
