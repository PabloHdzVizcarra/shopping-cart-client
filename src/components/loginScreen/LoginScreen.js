import React from "react";

const LoginScreen = () => {
  return (
    <div className="flex w-screen justify-center min-h-screen">
      <div className="flex w-6/12 items-center">
        <img
          src="https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          alt="Tu lista" 
          className="w-6/12 rounded"
          style={{
            height: "60%"
          }}
        />
        <div
          style={{
            height: "60%"
          }}
        >
          <form>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="text" />
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
