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
  const [abilities, setAbilities] = useState("");
  const [type, setType] = useState("");

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
        const abilities = datas.abilities.map((item) => item.ability.name);
        const types = datas.types.map((item) => item.type.name);
        setAbilities(abilities);
        setType(types);
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
  useEffect(() => {
    getDataPokemon();
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
        abilities={abilities}
        type={type}
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
      </div>
    </>
  );
}
