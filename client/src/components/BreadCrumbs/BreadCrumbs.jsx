import Breadcrumbs from '@mui/material/Breadcrumbs'
import path from '../../utils/path'
import { Link, useLocation } from 'react-router-dom'

function handleClick(event) {
    event.preventDefault();
}
function BreadCrumbs() {
    const location = useLocation()
    const breadcrumbs = [
        {
          id : 1,
          name : 'TRANG CHỦ',
          link : `${path.HOME}`
        },
        {
          id : 2,
          name : 'VIDEO HIGHTLIGHT',
          link : `/${path.VIDEO_HIGHLIGHT}`
    
        },{
          id : 3,
          name : 'TIN TỨC',
          link : `/${path.TIN_TUC}`
    
        },{
          id : 4,
          name : 'SOI KÈO',
          link : `/${path.SOI_KEO}`
    
        },
    ]
    
  return (
    <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" separator="›" style={{ color : 'white' }} >
            {breadcrumbs?.map((el) => {
                return (
                    el?.link === "" &&  
                        <Link to='/'   style={{ color : 'white', textDecoration : 'none' }}  key={el?.id}>
                            {el?.name}
                        </Link>
                )
            })}
            {breadcrumbs?.map((el) => {
                return (
                    el?.link === location?.pathname &&  
                        <Link to={el?.link} style={{ color : 'white', textDecoration : 'none' }} key={el?.id}>
                                {el?.name}
                        </Link>
                )
            })}
        </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbs