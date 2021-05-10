import { useEffect, useState } from "react";
import API from "../util/API";

function PublicImages(props) {
    const [publicImages, setPublicImages] = useState([]);

    useEffect(() => {
        API.getPublicImages().then(res => {
            setPublicImages(res.data.map(image => {
                return {
                    id: image._id,
                    image: image.imageS3Url,
                    name: image.name
                }
            }));
        });
    }, [publicImages])

    return (
        <div>
            {publicImages.map((image) => (
                <div>
                    <h2>{image.name}</h2>
                    <img src={image.image}></img>
                </div>
            ))}
        </div>
    )
}

export default PublicImages;