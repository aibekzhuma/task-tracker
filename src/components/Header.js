import Button from './Button'
import {useLocation} from "react-router-dom"
const Header = ({onAdd, showAddTask}) => {

    const location = useLocation()
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {  location.pathname === '/' && (
                <Button 
                    color={showAddTask? "Red" : "Green"} 
                    text={showAddTask ?"Close": 'Add' } 
                    onClick={onAdd}/>
                )}
        </header>
    )
}

export default Header
