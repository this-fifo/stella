import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

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
      <ContentLoader
        height={507}
        width={900}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
        <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
        <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
        <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
        <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
        <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
        <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
        <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
        <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
        <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
        <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
      </ContentLoader>
    </>
  )
}

LoaderCard.propTypes = {
  user: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default LoaderCard
