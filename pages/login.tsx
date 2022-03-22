import Head from "next/head";
import * as React from "react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <body>
        <div>
          <div id="Header" role={"banner"}>
            <div className="Header_inner">
              <a href="http://localhost:3000" className="link Food Order Share">
                <h1 className="blind">Food Order Share</h1>
              </a>
            </div>
            <div className="lang" id="lang switch"></div>
          </div>
        </div>
      </body>
    </>
  );
}
