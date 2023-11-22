"use client";
import Script from "next/script";
import { useEffect } from "react";

const Client = () => {
  useEffect(() => {
    const handle = async () => {
      try {
        const res = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/yody-340710.appspot.com/o/deeplink%2Fassetlinks.json?alt=media&token=399e3a01-5a92-4e68-8780-1ea15d5a2279",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.ok) {
          const result = await res.json();
          console.log(result);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handle();
  }, []);
  //   useEffect(() => {
  //     const ahihi = document.getElementById("ahihi");
  //     if (ahihi) {
  //       ahihi.innerHTML = `
  //         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
  //         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  //         <script type="text/javascript">
  //             alert("ahihi")
  //         </script>
  //         `;
  //     }
  //   }, []);
  return (
    <>
      {/* <div id="ahihi" dangerouslySetInnerHTML={{__html: `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <script type="text/javascript">
            alert("ahihi")
            console.log(window)
        </script>
        `}} /> */}
      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></Script> */}
      ahihi
    </>
  );
};

export default Client;
