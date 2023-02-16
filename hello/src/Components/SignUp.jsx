import React, { useState, useEffect } from "react";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    setError(false);
    fetch(`http://localhost:3001/user?email=${email}`)
      .then((repsponse) => repsponse.json())
      .then((user) => {
        if (user.length) {
          setError(true);
        }
      });
  }, [email]);

  return (
    <div className="grid align__item">
      <div className="register">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="site__logo"
          width="56"
          height="84"
          viewBox="77.7 214.9 274.7 412"
        >
          <defs>
            <linearGradient id="a" x1="0%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#8ceabb" />
              <stop offset="100%" stopColor="#378f7b" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
          />
        </svg>
        <h2>Sign Up</h2>
        <form action="" method="post" className="form">
          <div className="form__field">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="info@mailaddress.com"
            />
            {error && <p className="danger">The email has already been taken!</p>}
          </div>
          <div className="form__field">
            <input type="password" placeholder="••••••••••••" />
          </div>
          <div className="form__field">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}
