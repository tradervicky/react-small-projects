import InputBox from "./InputBox";
import "./Card.css";
import { useState } from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { MdFamilyRestroom } from "react-icons/md";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
function Card() {
  const targetRef = useRef();
  const [data, setData] = useState({
    Name: "",
    about: "",
    Occupation: "",
    DOB: "",
    age: "",
    address: "",
    contact: "",
    tenth: "",
    twelve: "",
    grad: "",
    others: "",
    father: "",
    fatherOcc: "",
    mother: "",
    motherOcc: "",
    sibling: "",
    familyType: "",
    gotra: "",
    nationality: "",
    religion: "",
    caste: "",
    subCaste: "",
    language: "",
  });

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  console.log(data.Name);

  return (
    <div className="CompleteContainer">
      <div className="biodataContainer">
        <h2>Biodata</h2>
        <InputBox
          textLabel="Enter Your Name"
          placeHolder="Enter Your Name"
          paddingInput="5px"
          widthInput="100%"
          onChange={(value) => handleChange("Name", value)}
        />

        <InputBox
          textLabel="About Yourself"
          placeHolder="Write Yourself or paste the text"
          paddingInput="5px"
          widthInput="100%"
          onChange={(value) => handleChange("about", value)}
        />
        <InputBox
          textLabel="Occupation"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="occupation"
          onChange={(value) => handleChange("Occupation", value)}
        />

        <InputBox
          textLabel="Date of Birth"
          placeHolder=" DD/MM/YYYY"
          paddingInput="5px"
          widthInput="100%"
          onChange={(value) => handleChange("DOB", value)}
        />
        <InputBox
          textLabel="Enter Your Age"
          placeHolder="Enter your age "
          paddingInput="5px"
          widthInput="100%"
          onChange={(value) => handleChange("age", value)}
        />

        <InputBox
          textLabel="Enter Your Address"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="Enter full Address"
          onChange={(value) => handleChange("address", value)}
        />
        <InputBox
          textLabel="Enter Contact detail"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="Enter mobile no."
          onChange={(value) => handleChange("contact", value)}
        />
        <p>
          {" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            copy and paste it or write yourself{" "}
          </span>
          <br />
          <br />
          "I am a very polite, sensitive and family-oriented person. Would like
          to meet my friends and family often, like to travel to different
          places and explore. I enjoy yoga together with spirituality. I'm an
          easy-going, sincere, caring person with a strong work ethic and
          consider myself a modern thinker."
        </p>

        <h2>Qualifications</h2>
        <InputBox
          textLabel="10th marks, school and year"
          paddingInput="5px"
          placeHolder="10th details"
          widthInput="100%"
          onChange={(value) => handleChange("tenth", value)}
        />
        <InputBox
          textLabel="12th marks, school and year"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="12th details"
          onChange={(value) => handleChange("twelve", value)}
        />
        <InputBox
          textLabel="Graduation marks, college and year"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="Graduation details"
          onChange={(value) => handleChange("grad", value)}
        />
        <InputBox
          textLabel="Any other"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="any other details"
          onChange={(value) => handleChange("others", value)}
        />
        <h2>Family Details</h2>
        <InputBox
          textLabel="Father's Name"
          paddingInput="5px"
          placeHolder="Enter Father's name"
          widthInput="100%"
          onChange={(value) => handleChange("father", value)}
        />
        <InputBox
          textLabel="Father's Occupation"
          onChange={(value) => handleChange("fatherOcc", value)}
          paddingInput="5px"
          placeHolder="Enter Father's Occupation"
          widthInput="100%"
        />
        <InputBox
          textLabel="Mother's Name"
          paddingInput="5px"
          placeHolder="Enter Mother's name"
          onChange={(value) => handleChange("mother", value)}
          widthInput="100%"
        />
        <InputBox
          textLabel="Mother's Occupation"
          paddingInput="5px"
          placeHolder="Enter Mother's Occupation"
          widthInput="100%"
          onChange={(value) => handleChange("motherOcc", value)}
        />
        <InputBox
          textLabel="No of Siblings"
          paddingInput="5px"
          placeHolder="Enter no of Siblings "
          widthInput="100%"
          onChange={(value) => handleChange("sibling", value)}
        />
        <InputBox
          textLabel="Family Type"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="Joint or Nuclear"
          onChange={(value) => handleChange("familyType", value)}

        />
        <InputBox
          textLabel="Gotra"
          paddingInput="5px"
          widthInput="100%"
          placeHolder="Enter Gotra"
          onChange={(value) => handleChange("gotra", value)}
        />
        <h2>Other Details</h2>
        <InputBox
          textLabel="Nationality"
          paddingInput="5px"
          placeHolder="Nationality"
          widthInput="100%"
          onChange={(value) => handleChange("nationality", value)}
        />
        <InputBox
          textLabel="Religion"
          paddingInput="5px"
          placeHolder="Religion"
          widthInput="100%"
          onChange={(value) => handleChange("religion", value)}
        />
        <InputBox
          textLabel="Caste"
          paddingInput="5px"
          placeHolder="Caste"
          widthInput="100%"
          onChange={(value) => handleChange("caste", value)}
        />
        <InputBox
          textLabel="Sub-Caste"
          paddingInput="5px"
          placeHolder="Sub-Caste"
          widthInput="100%"
          onChange={(value) => handleChange("subCaste", value)}
        />
        <InputBox
          textLabel="Language Known"
          paddingInput="5px"
          placeHolder="language"
          widthInput="100%"
          onChange={(value) => handleChange("language", value)}
        />
      </div>
      <div className="printContainer" ref={targetRef}>
        <div className="Navbar">
          <p>{data.Name}</p>
        </div>

        <div className="BodyContent">
          <div className="sidebar">
            <div className="contact">
              <h4>CONTACT</h4>
              <span>Mobile Number</span>
              <p>{data.contact}</p>
            </div>
            <div className="Address">
              <span>Address</span>
              <p>{data.address}</p>
            </div>
            <div className="Address">
              <span>Beliefs</span>
              <ul>
                <li>{data.religion}</li>
                <li>{data.caste}</li>
                <li>{data.subCaste}</li>
              </ul>
            </div>
            <div className="Address">
              <span>Profile</span>
              <span>Father's Name</span>
              <p>{data.father}</p>
              <span>Date of Birth</span>
              <p>{data.DOB}</p>
              <span>Nationality</span>
              <p>{data.nationality}</p>
              <span>Religion</span>
              <p>{data.religion}</p>
              <span>Language Known</span>
              <p>{data.language}</p>
            </div>
          </div>
          <div className="mainContentBody">
            <div className="mainBodyText">
              <div className="TextStyle">
                <div className="icon">
                  <BsPersonVcardFill size={24} />
                  <span>ABOUT ME</span>
                </div>

                <p>{data.about}</p>
              </div>
              <div className="TextStyle">
                <div className="icon">
                  <SiBookstack size={24} />
                  <span>Qualification</span>
                </div>
                <div className="DetailSepration">
                <span style={{ fontWeight: "bold" }}>10th :</span>
                  <p> {data.tenth}</p>
                </div>
                <div className="DetailSepration">
                <span style={{ fontWeight: "bold" }}>12th :</span>
                  <p> {data.twelve}</p>
                </div>
                <div className="DetailSepration">
                <span style={{ fontWeight: "bold" }}>Graduation : </span>
                  <p> {data.grad}</p>
                </div>
                <div className="DetailSepration">
                <span style={{ fontWeight: "bold" }}>Others : </span>
                  <p> {data.others}</p>
                </div>
             
              </div>
              <div className="TextStyle">
                <div className="icon">
                  <MdFamilyRestroom size={24} />
                  <span>FAMILY DETAILS</span>
                </div>
                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>Father's Name : </span>
                  <p> {data.father}</p>
                </div>

                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>
                    Father's Occupation :
                  </span>
                  <p> {data.fatherOcc}</p>
                </div>
                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>Mother's Name :</span>
                  <p>{data.mother}</p>
                </div>
                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>
                    Mother's Occupation :
                  </span>
                  <p>{data.motherOcc}</p>
                </div>
                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>Sibling :</span>
                  <p>{data.sibling}</p>
                </div>
                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>Family type :</span>
                  <p> {data.familyType}</p>
                </div>
                <div className="DetailSepration">
                  <span style={{ fontWeight: "bold" }}>Gotra :</span>
                  <p> {data.gotra}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <hr />
      <div className="btn">
      <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button>

      </div>
      <hr />

      <footer className="footerContainer">
      <div className="footerContent">
        <p>&copy; 2023 All rights reserved to <span className="brandName">The Bull Run</span></p>
      </div>
    </footer>
    </div>
  );
}

export default Card;
