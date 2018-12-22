import {useEffect} from 'react';
import {createPortal} from 'react-dom';

const modalRoot = document.getElementById('modal-container');

const Modal = (props) => {
	const element = document.createElement('dialog');

	function closeWithEscape(event) {
		if (event.keyCode === 27) {
			props.hideModal();
		}
	}

	function closeWithClickOutside(event) {
		
		props.hideModal();
	}

	useEffect(
		() => {
			modalRoot.appendChild(element);
			element.showModal();
			document.addEventListener('keypress', closeWithEscape);
			// document.addEventListener('mousedown', closeWithClickOutside);
			return () => {
				document.removeEventListener('keypress', closeWithEscape);
				// document.removeEventListener('mousedown', closeWithClickOutside);
				modalRoot.removeChild(element);
			}
		}
		);

		return createPortal(props.children, element)

};

export default Modal;