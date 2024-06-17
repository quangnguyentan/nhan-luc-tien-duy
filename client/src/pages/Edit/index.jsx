import React from 'react'

function Edit() {
    const [value, setValue] = useState({
        title_company : '',
        
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* <label>
    
        </label>
        <input type='text'/> */}
        <textarea rows='4' cols='50' />
        </form>
    </div>
  )
}

export default Edit