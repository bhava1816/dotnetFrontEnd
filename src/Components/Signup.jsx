import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const Nameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
  const imageref = useRef(null);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("/Image.webp");

  const myfunction = async () => {
    let Name = Nameref.current.value;
    let password = passwordref.current.value;
    let email = emailref.current.value;

    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("Name", Name);
    formdata.append("password", password);
    formdata.append("File", image);

    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailregex.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (!passwordregex.test(password)) {
      alert(
        "Password must be at least 8 characters long, contain uppercase, lowercase, number, and special character"
      );
      return;
    }

    try {
      const result = await fetch("https://localhost:7152/api/Signup", {
        method: "POST",
        body: formdata
      });

      const jsodata = await result.json();
      console.log(jsodata);

     
      Nameref.current.value = '';
      emailref.current.value = '';
      passwordref.current.value = '';
      imageref.current.value = null;

      setImage(null);
      setPreview("/Image.webp");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type='text' ref={Nameref} />
        </div>

        <div>
          <label>Email</label>
          <input type='email' ref={emailref} />
        </div>

        <div>
          <label>Password</label>
          <input type='password' ref={passwordref} />
        </div>

        <div>
          <label>File</label>
          <input
            type='file'
            ref={imageref}
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);

              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setPreview(imageUrl);
              }
            }}
          />
        </div>


        <img width="100px" src={preview} alt="user-preview" />

        <button type="button" onClick={myfunction}>
          Sign Up
        </button>
      </form>

      <p><Link to='/'>Loginpage</Link></p>
    </div>
  );
}

export default Signup;