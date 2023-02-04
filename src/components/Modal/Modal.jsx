import './styles.css'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modalWindow current" : "modalWindow"} onClick={() => setActive(false)}>
            <div className={active ? "modalWindowContent current" : "modalWindowContent"}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal