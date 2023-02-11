import './AlertModal.scss'

const AlertModal = ({ message, onClose }) => {
  return (
    <section id='alertModal'>
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </section>
  );
}

export default AlertModal;