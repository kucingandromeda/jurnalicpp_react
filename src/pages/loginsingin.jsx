import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginsinginLog } from "./compunent/loginsigninCompunent/log";
import send from "./compunent/loginsigninCompunent/source/send.svg";

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

  const [email, setEmail] = useState("");
  const [emailLog, setEmailLog] = useState(
    "jangan lupa minta code verifikasi di bagian kanan"
  );

  const emailStatic = useRef(null);
  const [emailState, setEmailState] = useState(true);
  const [emailTime, setEmailTime] = useState(30);
  const [emailTimeMinus, setEmailTimeMinus] = useState(0);

  const [enter, setEnter] = useState(false);

  const inputName = useRef(null);
  const inputPass = useRef(null);
  const inputEmail = useRef(null);
  const inputVerify = useRef(null);

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

  const gmailFn = () => {
    const emailValue = inputEmail.current.value;
    setEmail(emailValue);
  };

  const getVerif = () => {
    if (!emailState) return;
    setEmailState(false);
    setEmailLog(`kirim ulang dalam `);
    let count = 0;

    clearInterval(emailStatic.current);
    emailStatic.current = setInterval(() => {
      if (count === 30) {
        setEmailState(true);
        setEmailLog("kirim ulang");
        setEmailTimeMinus(0);
        clearInterval(emailStatic.current);
      } else {
        setEmailTimeMinus((num) => num + 1);
        setEmailLog(`kirim ulang dalam `);
        count += 1;
      }
    }, 1000);

    setErrorLog("sending...");
    setLogPopUpStat(true);
    const form = new FormData();
    form.append("email", email);
    fetch(import.meta.env.VITE_API_GET_VERIF, {
      method: "POST",
      body: form,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setErrorLog(res.servertext);
        setLogPopUpStat(true);
      });
  };

  let timeOut = emailTime - emailTimeMinus;

  const submit = () => {
    if (!enter) return;
    const form = new FormData();
    form.append("name", name);
    form.append("pass", pass);
    form.append("email", email);
    type !== "login" ? form.append("verify", inputVerify.current.value) : null;

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

            {type !== "login" ? (
              <>
                <div className="gmail-form">
                  <h2>Gmail</h2>
                  <div className="email-div">
                    <input
                      ref={inputEmail}
                      type="email"
                      name="email"
                      id="email"
                      className="email-inpt"
                      onChange={gmailFn}
                    />
                    <motion.button
                      variants={{
                        true: { opacity: 1 },
                        false: {
                          opacity: 0.3,
                        },
                      }}
                      animate={email !== "" ? "true" : "false"}
                      whileHover={
                        email !== ""
                          ? { backgroundColor: "rgb(0, 238, 255)" }
                          : {}
                      }
                      onClick={getVerif}
                    >
                      <img src={send} alt="send code" />
                    </motion.button>
                  </div>
                  <p style={{ color: "black" }}>
                    {emailState ? emailLog : emailLog + timeOut}
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}

            {type !== "login" ? (
              <>
                <div className="verif-form">
                  <h2>verification code</h2>
                  <input
                    ref={inputVerify}
                    type="text"
                    name="verif"
                    id="verif"
                    // onChange={validationFn}
                  />
                  <p style={{ color: "black" }}>
                    verification code akan expired setelah 10 menit dikirim
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}

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
              <h3>{type === "login" ? "LOG IN" : "SIGN IN"}</h3>
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
