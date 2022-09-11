import React, { useEffect, useState, useRef } from "react";
import { getDataPke, getDataType } from "../store/actions";
import "../styles/style.css";
import CardImage from "./CardImage";

export default function App(props) {
  const [data, setData] = useState([]);
  const [dataPokeType, setDataPokeType] = useState("");
  const [image, setImage] = useState([]);
  const ref = useRef(null);

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
        const image = datas.sprites.front_default;
        console.log(image);
        setImage(image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetDataPokemon = (event) => {
    // getDataPokemonType(event.currentTarget.id);
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
    <div className="card-app col-12">
      <div className="header">
        <h1 className="text-center">Pokemon</h1>
        <input className="input" name="search"></input>
      </div>
      <div>
        {data
          .map((item, index) => {
            return (
              <>
                <div className="card-item" key={index}>
                  {item.name}

                  <div key={index}>
                    <button
                      className="btn btn-primary"
                      ref={ref}
                      id={index + 1}
                      type="button"
                      onClick={handleGetDataPokemon}
                    >
                      detail
                    </button>
                  </div>
                  <div>
                    {dataPokeType.sprites.map((item, index) => {
                      return <CardImage {...item} />;
                    })}

                    {/* <CardImage front_default={image} /> */}
                    {/* <img src={image} alt="image" /> */}
                  </div>
                </div>
              </>
            );
          })
          .filter((item, index) => {
            return index < 10;
          })}
      </div>
      {/* </h1> */}
      {/* </div> */}
    </div>
  );
}
