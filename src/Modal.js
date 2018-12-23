import {useEffect} from 'react';
import {createPortal} from 'react-dom';

const modalRoot = document.getElementById('modal-container');

const Modal = (props) => {
	const element = document.createElement('dialog');
	const inner = document.createElement('div');
	element.style.padding = 0;
	element.appendChild(inner);

	function closeWithEscape(event) {
		if (event.keyCode === 27) {
			props.hideModal();
		}
	}

	function closeWithClickOutside(event) {
		console.log(event.target);
		if (event.target === element) {
			props.hideModal();
		}
	}

	useEffect(
		() => {
			modalRoot.appendChild(element);
			element.showModal();
			document.addEventListener('keypress', closeWithEscape);
			element.addEventListener('click', closeWithClickOutside);
			document.body.style.overflow = "hidden";
			return () => {
				document.removeEventListener('keypress', closeWithEscape);
				element.removeEventListener('click', closeWithClickOutside);
				modalRoot.removeChild(element);
				document.body.style.overflow = null;
			}
		}
		);

		return createPortal(props.children, inner)

};

export default Modal;