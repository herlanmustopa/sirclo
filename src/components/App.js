import React, { useEffect, useState, useRef } from "react";
import { getDataPke, getDataType } from "../store/actions";
import "../styles/style.css";
import CardImage from "./CardImage";
import Modal from "./Modal";

export default function App(props) {
  const [data, setData] = useState([]);
  const [dataPokeType, setDataPokeType] = useState([]);
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  // const { image, name, type } = dataPokeType;

  const getDataPokemon = () => {
    getDataPke()
      .then((res) => {
        const datas = res.results;
        setData(datas);
        // console.log(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataPokemonType = (id) => {
    getDataType(id)
      .then((res) => {
        const datas = res;
        setDataPokeType(datas);
        const image = datas.sprites;
        // const obj = Object.values(image);
        console.log(image.front_default);
        setImage(image.front_default);
        setName(datas.name);
        setHeight(datas.height);
        setWeight(datas.weight);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetDataPokemon = (event) => {
    console.log(event.currentTarget.id);
    handleShow();
    getDataPokemonType(event.currentTarget.id);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  const getId = () => {
    for (let i = 1; i <= 20; i++) {
      // console.log(i);
      getDataPokemonType(i);
    }
  };
  useEffect(() => {
    getDataPokemon();
    getId();
  }, []);
  return (
    <>
      <Modal
        show={show}
        handleClose={handleClose}
        front_default={image}
        name={name}
        height={height}
        weight={weight}
      />
      <div className="card-app col-12">
        <div className="header">
          <h1 className="text-center">Pokemon </h1>
          <input
            className="input"
            name="search"
            value={search}
            onChange={handleChange}
          ></input>
        </div>
        <div className="card-container"></div>
        <div>
          {data
            .filter((item, index) => {
              return item.name.toString().includes(search);
              //   .toLowerCase()
              //   .includes(ref.current.value.toLowerCase());
            })
            .map((item, index) => {
              return (
                <div className="card-item" key={index}>
                  {item.name}
                  <div key={index}>
                    <button
                      className="btn btn-primary"
                      ref={ref}
                      id={item.name}
                      type="button"
                      onClick={handleGetDataPokemon}
                    >
                      detail
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* </h1> */}
        {/* </div> */}
      </div>
    </>
  );
}
