import Card from './Card';
import './InvalidModal.css'

const InvalidModal = (props) => {
    const onOkClickHandler = () => {
        props.isOkayClicked(true);
    }

    return (
        <Card class='input'>
            <div className="backdrop">
                <div className="modal">
                    <div className="header">
                        <h2 className="modal-title">Invalid Input</h2>
                    </div>
                    <div className="content">
                        <h3>{props.message}</h3>
                        <div className="actions">
                            <button style={{ backgroundColor: '#4f005f' }} onClick={onOkClickHandler} type="button">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        </Card >
    )
}

export default InvalidModal;