import { useState, useCallback, useEffect } from "react";
import Dropzone from "./Dropzone";
import cuid from "cuid";
import API from "../util/API";

function UploadPictures(props) {

    const [permission, setPermission] = useState("Public");
    const [image, setImage] = useState([]);


    const submitPictures = () => {
        for (let i = 0; i < image.length; i++) {

            const blob = dataURItoBlob(image[i].src);
            const data = new FormData();
            data.append("image", blob, image[i].name);
            data.name = image[i].name;
            data.privacy = permission;
            API.postImage(data)
        }
        setImage([]);
    }


    function dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        var ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;

    }


    const onDrop = useCallback(acceptedFiles => {
        // Loop through accepted files
        acceptedFiles.map(file => {
            // Initialize FileReader browser API
            const reader = new FileReader();
            // onload callback gets called after the reader reads the file data
            reader.onload = function (e) {
                // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
                setImage(prevState => [...prevState, { id: cuid(), src: e.target.result, name: file.name }]);
            };
            // Read the file as Data URL (since we accept only images)
            reader.readAsDataURL(file);
            return file;
        });
    }, []);


    useEffect(() => {
        console.log(image);
    }, [image])

    return (
        <div className="imageUpload" >
            <Dropzone onDrop={onDrop} accept={"image/*"} ></Dropzone>
            <div className="radio">
                <input name="permission" type="radio" value="Public" id="radioButtonPublic" checked onChange={(event) => setPermission(event.target.value)} />
                <label for="radioButtonPublic">
                    Public
                </label>
                <input name="permission" type="radio" value="Private" id="radioButtonPrivate" onChange={(event) => setPermission(event.target.value)} />
                <label for="radioButtonPrivate">
                    Private
                </label>
            </div>
            <button type="button" className="btn btn-primary" onClick={submitPictures}>Submit</button>

            {image.map(image => (
                <div>
                    <h2>{image.name}</h2>
                    <img src={image.src} alt={image.id}></img>
                </div>
            ))}
        </div>
    )

}
export default UploadPictures;