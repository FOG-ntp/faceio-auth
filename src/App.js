/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import './App.css'

function App() {
  let faceioInstance = null

  useEffect(() => {
    const faceIoScript = document.createElement('script')
    faceIoScript.src = '//cdn.faceio.net/fio.js'
    faceIoScript.async = true
    faceIoScript.onload = () => faceIoScriptLoaded()
    document.body.appendChild(faceIoScript)

    return () => {
      document.body.removeChild(faceIoScript)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const faceIoScriptLoaded = () => {
    console.log(faceIO)
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO('your-faceio-app-public-id')
    }
  }

  // New face character register to system
  const faceRegistration = async () => {
    try {
      const userInfo = await faceioInstance.enroll({
        locale: "auto",
        payload: {
          email: "nguyenthanhphong2912002@gmail.com",
          userId: "290102-id-trungquandev",
          username: "thanhphongdev",
          
        },
      })
      console.log(userInfo)
      console.log('Unique Facial ID: ', userInfo.facialId)
      console.log('Enrollment Date: ', userInfo.timestamp)
      console.log('Gender: ', userInfo.details.gender)
      console.log('Age Approximation: ', userInfo.details.age)
    } catch (errorCode) {
      console.log(errorCode)
      handleError(errorCode)
    }
  }

  // Authentication a a face has into system
  const faceSignIn = async () => {
    try {
      console.log(faceioInstance)
      const userData = await faceioInstance.authenticate({
        locale: "auto",
      })
      console.log(userData)
  
      console.log('Unique Facial ID: ', userData.facialId)
      console.log('PayLoad: ', userData.payload)
    } catch (errorCode) {
      console.log(errorCode)
      handleError(errorCode)
    }
  }
  const handleError = (errCode) => {
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
    // const fioErrCode={PERMISSION_REFUSED:1,NO_FACES_DETECTED:2,UNRECOGNIZED_FACE:3,MANY_FACES:4,PAD_ATTACK:5,FACE_MISMATCH:6,NETWORK_IO:7,WRONG_PIN_CODE:8,PROCESSING_ERR:9,UNAUTHORIZED:10,TERMS_NOT_ACCEPTED:11,UI_NOT_READY:12,SESSION_EXPIRED:13,TIMEOUT:14,TOO_MANY_REQUESTS:15,EMPTY_ORIGIN:16,FORBIDDDEN_ORIGIN:17,FORBIDDDEN_COUNTRY:18,UNIQUE_PIN_REQUIRED:19,SESSION_IN_PROGRESS:20}
    switch (errCode) {
      case fioErrCode.PERMISSION_REFUSED:
        console.log("Access to the Camera stream was denied by the end user")
        break
      case fioErrCode.NO_FACES_DETECTED:
        console.log("No faces were detected during the enroll or authentication process")
        break
      case fioErrCode.UNRECOGNIZED_FACE:
        console.log("Unrecognized face on this application's Facial Index")
        break
      case fioErrCode.MANY_FACES:
        console.log("Two or more faces were detected during the scan process")
        break
      case fioErrCode.PAD_ATTACK:
        console.log("Presentation (Spoof) Attack (PAD) detected during the scan process")
        break
      case fioErrCode.FACE_MISMATCH:
        console.log("Calculated Facial Vectors of the user being enrolled do not matches")
        break
      case fioErrCode.WRONG_PIN_CODE:
        console.log("Wrong PIN code supplied by the user being authenticated")
        break
      case fioErrCode.PROCESSING_ERR:
        console.log("Server side error")
        break
      case fioErrCode.UNAUTHORIZED:
        console.log("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information")
        break
      case fioErrCode.TERMS_NOT_ACCEPTED:
        console.log("Terms & Conditions set out by FACEIO/host application rejected by the end user")
        break
      case fioErrCode.UI_NOT_READY:
        console.log("The FACEIO Widget code could not be (or is being) injected onto the client DOM")
        break
      case fioErrCode.SESSION_EXPIRED:
        console.log("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly")
        break
      case fioErrCode.TIMEOUT:
        console.log("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)")
        break
      case fioErrCode.TOO_MANY_REQUESTS:
        console.log("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications")
        break
      case fioErrCode.EMPTY_ORIGIN:
        console.log("Origin or Referer HTTP request header is empty or missing")
        break
      case fioErrCode.FORBIDDDEN_ORIGIN:
        console.log("Domain origin is forbidden from instantiating fio.js")
        break
      case fioErrCode.FORBIDDDEN_COUNTRY:
        console.log("Country ISO-3166-1 Code is forbidden from instantiating fio.js")
        break
      case fioErrCode.SESSION_IN_PROGRESS:
        console.log("Another authentication or enrollment session is in progress")
        break
      case fioErrCode.NETWORK_IO:
      default:
        console.log("Error while establishing network connection with the target FACEIO processing node")
        break
    }
  }

  return (
    
    <div className="face-authentication-by-thanhphongdev flex fdc jcfc aic">
      <img src='data:image/png;base64,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'></img>
      <h1>Face Authentication using ReactJS & FaceIO</h1>
      <button className="action face-registration" onClick={faceRegistration}>Face Registration</button>
      <button className="action face-sign-in" onClick={faceSignIn}>Face Sign In</button>
      
    </div>

    
    
  )
}

export default App
