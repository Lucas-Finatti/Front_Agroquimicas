import React from "react";
import './styles.css';
import { Divider } from "@react-md/divider";
import file from '../../teste.pdf' 

const ServicePage = () => {
    return (
        <div id="services">
            <div className="content">
                <h1>Services</h1>
                <div className="Services">
                {/* <button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')}}>Download Image</button> */}
                    <Divider /><br />
                    <div className="download">
                        <h3>File title</h3>
                        <a href={file} download='download'>DOWNLOAD</a>
                        <h4>Dowload of the file desired</h4>
                    </div>
                    <div className="upload">
                        <h3>File title</h3>
                        <input type='file' accept='image/*' id='file-input' /> 
                        <h4>Upload of the file desired</h4>
                    </div>
                </div>
                <div className="upload"></div>
            </div>
        </div>
    )
}

export default ServicePage