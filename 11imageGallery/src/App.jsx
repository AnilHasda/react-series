
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./config/apiKey";
function App() {
  let [image, setImage] = useState([]);
  let [input, setInput] = useState("");
  let [firstDisplay, setFirstDisplay] = useState([])
  let [loading,setLoading]=useState(true);
  useEffect(() => {
    (async () => {
      let response = await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=30`);
      setLoading(false);
      setImage(response.data);
      setFirstDisplay(response.data);
      console.log(response)
    })()
  }, [])
  const searchImage = () => {
    if (input === "") {
      setImage(firstDisplay);
    }
    else {
      let filterImage = image.filter(ele => ele.alt_description.includes(input));
      setImage(filterImage);
    }
  }
  useEffect(searchImage, [input])
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "0px" }}>this is image gallery project</h2>
      <div style={{ backgroundColor: "", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}><input type="text" placeholder="search images" style={{ height: "40px", width: "50%", paddingLeft: "20px", outline: "none" }} onChange={e => setInput(e.target.value)} /></div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "50px" }}>
        {image.length > 0 ? image.map((ele, index) => {
          return <>
            <div key={index} style={{}}><img src={ele.urls.regular} alt="image" width="100%" style={{ objectFit: "cover", width: "300px", height: "300px" }} />
              <br />
              <p>{ele.alt_description ? ele.alt_description.substring(0, 40) : "reactjs"}</p>
            </div>

          </>
        }) :<h2>{loading?"...loading":"Image Not Found"}</h2>}

      </div>
    </>
  )
}

export default App
