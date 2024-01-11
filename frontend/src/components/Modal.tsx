import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import iconCalendar from '../assets/calendar.svg';
import iconMapoint from '../assets/map-point.svg';
// import iconPeople from '../assets/group.svg';
import phone from '../assets/phone.svg';
import letter from '../assets/letter.svg';
import meeting from '../assets/meeting.svg';
// import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

type MydModalProps = {
  firstname: string;
  lastname: string;
  date: string;
  capital: string;
  photo: string;
  email: string;
  phoneNumber: string;
  countries: string[];
  show: boolean;
  onHide: () => void;
};

const MydModal: React.FC<MydModalProps> = ({
  firstname,
  lastname,
  phoneNumber,
  date,
  capital,
  countries,
  photo,
  email,
  ...props
}) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {firstname} {lastname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <div className="modal-image-wrapper">
                <img className="modal-image" src={`http://localhost:1338${photo}`} alt="image-user" />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <Row>
                <Col xs={12} md={5}>
                  <div className="modal-cityDate-wrapper">
                    <div className="modal-city-wrapper">
                      <img src={iconMapoint} alt="city" />
                      {capital}
                    </div>
                    <div className="modal-date-wrapper">
                      <img src={iconCalendar} alt="calendar" />
                      <div className="test">{date}</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={7}>
                  <div className="modal-letterPhone-wrapper">
                    <div className="modal-letter-wrapper">
                      <img src={letter} alt="letter" />
                      <div className="test">{email}</div>
                    </div>
                    <div className="modal-phone-wrapper">
                      <img src={phone} alt="letter" />
                      <div className="test">{phoneNumber}</div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="modal-countries-wrapper">
                  <div className="modal-meeting">
                    <img src={meeting} alt="meeting" />
                  </div>
                  <div className="modal-flag-wrapper">
                    {countries.map((country, index) => (
                      <div className="modal-flag" key={index}>
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="footer-left">
                <Button onClick={props.onHide}>Envoyer un message</Button>
                <Button onClick={props.onHide}>Ajouter en ami</Button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer-right">
                <Button variant="danger" onClick={props.onHide}>
                  Signaler le profil
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
      {/* <div className="footer-left">
          <Button onClick={props.onHide}>Envoyer un message</Button>
          <Button onClick={props.onHide}>Ajouter en ami</Button>
        </div>
        <div className="footer-right">
          <Button variant="danger" onClick={props.onHide}>
            Signaler le profil
          </Button>
        </div>
      </Modal.Footer> */}
    </Modal>
  );
};

export default MydModal;
