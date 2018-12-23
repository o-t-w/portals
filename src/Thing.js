import React, {useState} from 'react';
import Modal from './Modal';

const Thing = (props) => {
	const [modal, setModal] = useState(false);
	const [acceptCookieModal, setAcceptCookieModal] = useState(false);

	function showModal() {
		setModal(true);
	}

	function hideModal() {
		setModal(false);
	}

	function showOtherModal() {
		setAcceptCookieModal(true);
	}

	function hideOtherModal() {
		setAcceptCookieModal(false);
	}

	return (
		<div>
			<h1>lorem ipsum</h1>
			
			<button onClick={showModal}>show modal</button>
			<button onClick={showOtherModal}>show other modal</button>
			{
				modal? <Modal hideModal={hideModal}>
					lorem ipsum
					<button onClick={hideModal}>close</button>

				</Modal> : null
			}
			{acceptCookieModal && <Modal hideModal={hideOtherModal}>
				blah some other modal
				<button onClick={hideOtherModal}>close</button>
			</Modal>}

		</div>
	);
};

export default Thing;