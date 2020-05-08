import React from 'react'
import Contact from './Contact'

const Persons = ({persons}) => {
    return (
    <>  
      {persons.map(p => <Contact key={p.name} person={p}/>)}
    </>
    )
}

export default Persons