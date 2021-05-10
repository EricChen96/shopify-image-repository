import { useState, useEffect } from "react";
import API from "../util/API";

function PrivateImages(props) {
    const [privateImages, setPrivateImages] = useState([]);
    
    useEffect(() => {
        API.getPrivateImages().then((res) => {
            setPrivateImages(res.data.map(image => {
                return {
                    id: image._id,
                    image: image.imageS3Url,
                    name: image.name
                }
            }));
        })
    },[privateImages])

    const handleDeleteImage = (imageID) => {
        API.deleteImage(imageID);
    }

    const handleDeleteAllImages = () => {
        API.deleteAllImages();
    }
    return (
        <div>
            <button onClick={handleDeleteAllImages}>Delete All Images</button>
            {privateImages.map((image)=> (
                <div>
                    <h2>{image.name}</h2>
                    <img src={image.image}></img>
                    <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default PrivateImages;