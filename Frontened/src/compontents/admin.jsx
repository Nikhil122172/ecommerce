import React,{ useState} from "react";
// import { productsCreate } from "../../store/slices/adminData";
import { useDispatch } from "react-redux";
import { productsCreate } from "../../Store/Slices/adminSlice";
// import { productsCreate } from "../../store/slices/adminData";

// import { login } from "../../../../../backend/middleware/authent";
// import { sendData } from "../../store/slices/dataSlice";
// import {adminData} from "../../store/slices/adminData";

const AdminData = () => {
    const dispatch = useDispatch();

  const [formdata, setformdata] = useState({ name: "", price: "", description:"", image:"" });
  // const [name,setname] = useState("");
  // const [price,setprice] = useState("");
  // const [description,setdescription] = useState("");
  const [checkImage,setcheckImage] = useState("");
   
  // console.log(checkImage);
  
  const handlefunc = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    // setformdata({ ...formdata, image: e.target.files[0] });
    const file = e.target.files[0];
    console.log("ye handle img hai->",file);
    
    setformdata({...formdata,image:file});
    // console.log(file);
    
    // TransformFile(file);
  };

  // const TransformFile = (file) =>{
  //   const reader = new FileReader();
  //   if(file){
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () =>{
  //       const res = reader.result
  //       setcheckImage(res);
  //       setformdata({...formdata,image:res});
  //     }
  //   }else{
  //     setcheckImage("");
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(adminData(formdata));
    console.log("ye image2.0->",formdata.image);
    console.log("ye name2.0->",formdata.name);
    
    dispatch(productsCreate(formdata));
    // setname("");
    // setprice("");
    // setdescription("");
    setcheckImage("");
    setformdata({name: "",price:"",description:"",image:""});
    // setcheckImage("");
  }
  // const handleFileChange = (e) => {

  // }
  return (
    <>
      <form onSubmit={handleSubmit}>
        ProductName:{" "}
        <input
          type="text"
          name="name"
          value={formdata.name}
          placeholder="Enter object name"
          onChange={handlefunc}
          required
        />
        <br></br>
        Price:{" "}
        <input
          type="number"
          name="price"
          value={formdata.price}
          placeholder="Enter product price"
          onChange={handlefunc}
          required
        />
        <br></br>
        Description:{" "}
        <input
          type="text"
          name="description"
          value={formdata.description}
          placeholder="write description"
          onChange={handlefunc}
          required
        />
        <br></br>
        <input name="image" type="file" accept="image/" onChange={handleImage}/>
        <button type="submit">submit</button>
      </form>
      <div>
        {
          checkImage ? 
          <>
            <img src={formdata.image} height="250px" width="250px" alt="produt image!" />
          </> : <p>Image will appear here!</p>
        }
      </div>
    </>
  );
};

export default AdminData;
