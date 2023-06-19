import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImageToBase64 } from "../utility/ImageToBase64";
import { toast } from "react-hot-toast";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    // console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, category, image, price, description } = data;

    if ((name && category && image, price, description)) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadProducts`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Pleas enter the required information 😅");
    }
  };

  return (
    <div className="newProduct">
      <div className="newProductForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="titleLable">
            Name:
          </label>
          <input
            type={"text"}
            className="newProdInput"
            name="name"
            onChange={handleOnChange}
            value={data.name}
          />
          <label htmlFor="category" className="titleLable">
            Category:
          </label>
          <select
            className="newProdInput"
            onChange={handleOnChange}
            name="category"
            value={data.category}
          >
            <option value={"other"}>Select Category</option>
            <option value={"sneakers"}>Sneakers</option>
            <option value={"dress"}>Dress</option>
            <option value={"men"}>For Men</option>
            <option value={"kids"}>For Kids</option>
          </select>

          <label htmlFor="image" className="titleLable">
            Image
            <div className="imageUploader">
              {data.image ? (
                <img src={data.image} className="imageProduct" />
              ) : (
                <BsCloudUpload className="uploadIcon" />
              )}

              <input
                type={"file"}
                onChange={uploadImage}
                accept="image/*"
                id="image"
                className="fileUploaderBtn"
              />
            </div>
          </label>
          <label htmlFor="price" className="titleLable">
            Price:
          </label>
          <input
            type={"text"}
            className="newProdInput"
            name="price"
            onChange={handleOnChange}
            value={data.price}
          />
          <label htmlFor="description" className="titleLable">
            Description:
          </label>
          <textarea
            rows={3}
            value={data.description}
            className="descriptionArea"
            name="description"
            onChange={handleOnChange}
          ></textarea>
          <button id="save" className="saveBtn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
