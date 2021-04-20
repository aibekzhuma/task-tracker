import Button from './Button'

const Header = ({onAdd, showAddTask}) => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color={showAddTask? "Red" : "Green"} text={showAddTask ?"Close": 'Add' } onClick={onAdd}/>
        </header>
    )
}

export default Header
