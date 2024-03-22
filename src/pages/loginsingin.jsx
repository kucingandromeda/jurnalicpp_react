import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginsinginLog } from "./compunent/loginsigninCompunent/log";

export const Loginsingin = () => {
  const [type, setType] = useState("");
  const navi = useNavigate();

  useEffect(() => {
    setType(window.location.pathname.replace("/", ""));
  }, [window.location.pathname]);

  const [name, setName] = useState("");
  const [nameLog, setNameLog] = useState("-");

  const [pass, setPass] = useState("");
  const [passLog, setPassLog] = useState("-");

  const [enter, setEnter] = useState(false);

  const inputName = useRef(null);
  const inputPass = useRef(null);

  const validationFn = () => {
    let value = inputName.current.value;
    const passValue = inputPass.current.value;
    if (value.includes(" ")) {
      value = value.replace(/ /g, "_");
      inputName.current.value = value;
    }

    if (value.includes(" ") || value.includes("-") || value.includes("=")) {
      setNameLog(`tidak boleh ada spasi, "-", "=", "?"`);
      setEnter(false);
    } else if (value === "") {
      setNameLog(`tidak boleh kosong`);
      setEnter(false);
    } else if (passValue.length < 8) {
      setPassLog("minimal 8 char");
      setEnter(false);
      setNameLog(`-`);
    } else {
      setEnter(true);
      setNameLog(`-`);
      setPassLog(`-`);
      setName(value);
      setPass(passValue);
    }
  };

  const [logPopup, setLogPopup] = useState(false);
  const [errorLog, setErrorLog] = useState("");
  const setLogPopUpStat = (stat) => {
    setLogPopup(stat);
  };

  const submit = () => {
    if (!enter) return;
    const form = new FormData();
    form.append("name", name);
    form.append("pass", pass);

    type === "login"
      ? fetch(import.meta.env.VITE_API_LOGIN, {
          method: "POST",
          body: form,
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res !== "suksess") {
              setErrorLog(res.servertext);
              setLogPopUpStat(true);
            }
          })
      : fetch(import.meta.env.VITE_API_SIGNIN, {
          method: "POST",
          body: form,
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res !== "suksess") {
              setErrorLog(res.servertext);
              setLogPopUpStat(true);
            }
          });
  };

  return (
    <>
      <div className="login">
        <div className="login-body">
          <h1>{type === "login" ? "LOG IN" : "SIGN IN"}</h1>
          <div className="login-form">
            <div className="name-form">
              <h2>name</h2>
              <input
                ref={inputName}
                type="text"
                name="name"
                id="name"
                onChange={validationFn}
              />
              <p className={nameLog === "-" ? "log-hidden" : ""}>{nameLog}</p>
            </div>
            <div className="pass-form">
              <h2>password</h2>
              <input
                ref={inputPass}
                type="password"
                name="pass"
                id="pass"
                onChange={validationFn}
              />
              <p className={passLog === "-" ? "log-hidden" : ""}>{passLog}</p>
            </div>
            <motion.button
              variants={{
                true: {
                  opacity: 1,
                  border: "3px solid rgb(0, 213, 255)",
                  cursor: "pointer",
                },
                false: {
                  opacity: 0.3,
                  border: "3px solid rgb(255, 122, 122)",
                  cursor: "not-allowed",
                },
              }}
              animate={enter ? "true" : "false"}
              whileHover={
                enter
                  ? {
                      backgroundColor: "rgb(0, 238, 255)",
                      boxShadow: "0 0 15px rgb(0, 204, 255)",
                      transition: { duration: 0.1 },
                    }
                  : {}
              }
              className="login-button"
              onClick={submit}
            >
              <h3>LOG IN</h3>
            </motion.button>
          </div>

          {type === "login" ? (
            <h3>
              belum punya akun?,
              <span
                onClick={() => navi("/signin")}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                klik disini
              </span>
            </h3>
          ) : (
            <h3>
              sudah punya akun?,
              <span
                onClick={() => navi("/login")}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                klik disini
              </span>
            </h3>
          )}
          <h3 style={{ cursor: "pointer" }} onClick={() => navi("/")}>
            kembali
          </h3>
        </div>
        <div className="login-img">
          <div className="login-img-canvas">
            <img src={`banner/${type}.png`} alt="" />
          </div>
        </div>
        <LoginsinginLog
          logPopup={logPopup}
          setLogPopUpStat={setLogPopUpStat}
          errorLog={errorLog}
        ></LoginsinginLog>
      </div>
    </>
  );
};
