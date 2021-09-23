import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { useState, createContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class pemain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pemain: [],
      visible: false,
      nama: "",
      jurusan: "",
      universitas: "",
      detail: "",
    };
  }

  handleNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
    console.log(this.state.nama);
  };
  handleJurusan = (e) => {
    this.setState({
      jurusan: e.target.value,
    });
    console.log(this.state.jurusan);
  };
  handleUniversitas = (e) => {
    this.setState({
      universitas: e.target.value,
    });
    console.log(this.state.universitas);
  };
  handleDetail = (e) => {
    this.setState({
      detail: e.target.value,
    });
    console.log(this.state.detail);
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:3000/dataPlayer",
      // json-server --watch dataPlayer.json
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          Player: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.Player.map((results, _index) => {
          return (
            <div className="card mb-2 " key={results._id}>
              <div className="card-body">
                <h5 className="card-title">Nama : {results.nama}</h5>
                <h5 className="card-subtitle mb-2 text-muted">
                  Jurusan : {results.jurusan}
                </h5>
                <h5 className="card-text text-black">
                  Universitas : {results.universitas}
                </h5>
              </div>
              <Player
                nama={results.nama}
                jurusan={results.jurusan}
                universitas={results.universitas}
                detail={results.detail}
              />
              ;
            </div>
          );
        })}
      </div>
    );
  }
}

function Player(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { nama, jurusan, universitas, detail } = props;

  var userDetailContext = createContext(null);

  return (
    <>
      <userDetailContext.Provider>
        <Button variant="primary" onClick={handleShow}>
          Detail
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{nama}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Jurusan : {tim}</p>
            <p>Universitas : {kebangsaan}</p>
            <p>
              Tentang : <br /> {detail}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </userDetailContext.Provider>
    </>
  );
}
