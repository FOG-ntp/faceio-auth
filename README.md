# FaceIO-Authentication

## Face-Auth UI
<img width="960" alt="image" src="https://user-images.githubusercontent.com/99815527/194789250-325a00e8-6a21-4496-926d-3e837c94da76.png">

## Face Capture
<img width="960" alt="image" src="https://user-images.githubusercontent.com/99815527/194789321-b68e6ffe-6462-4825-b1d0-9e9175ac6de4.png">
<img width="960" alt="image" src="https://user-images.githubusercontent.com/99815527/194789544-f0d64123-3112-4ec6-ad5c-9b85cdf15fe1.png">
<img width="956" alt="image" src="https://user-images.githubusercontent.com/99815527/194789621-0651279b-0f8e-4e40-8d30-1a981d9a7462.png">

## Verification
<img width="960" alt="image" src="https://user-images.githubusercontent.com/99815527/194789399-189f5faf-ec67-4eb0-8ccf-0fe5e44a5b79.png">

## Pin Code Capture

<img width="960" alt="image" src="https://user-images.githubusercontent.com/99815527/194789498-5b841ba1-9f21-431b-aadf-47e5a938c061.png">

## Success

<img width="959" alt="image" src="https://user-images.githubusercontent.com/99815527/194789419-9c5fb5a9-bed9-4b9b-bd7d-5f6ffee93c61.png">

## Technologies

- [`React`](https://reactjs.org/)
- [`Create-React-App`](https://create-react-app.dev/)
- [`FaceIO (fio.js)`](https://faceio.net/getting-started)
- [`PixLab Insight`](https://pixlab.io)

## To run locally

- run the following commands

```code
# clone
git clone https://github.com/FOG-ntp/FaceIO-Authentication

# install node_modules
yarn install

# run app
npm start
```
```

## Facial recognition authentication

Facial recognition is one of the latest authentication techniques, and many developers are adopting it these days. Facial recognition reduces the hassle of entering your email-password or any other user credentials to log in to a web application.

The most important thing is that this authentication system is fast and doesn't need any special hardware. You just need a webcam, which almost all devices have nowadays.

Facial recognition technology uses artificial intelligence to map out the unique facial details of a user and store them as a hash (some random numbers and text with no meaning) to reduce privacy-related issues.

Building and deploying an artificial intelligence-based face recognition model from scratch is not easy and can be very costly for indie developers and small startups. So you can use SaaS platforms to do all this heavy-lifting for you. FaceIO and AWS recognition are examples of these type of services you can use in your projects.

In this hands-on project, we are going to use FaceIO APIs to authenticate a user via facial recognition in a React web application. FaceIO gives you an easy way to integrate the authentication system with their fio.js JavaScript library.

## Privacy and FaceIO

Privacy is the most important thing for a user nowadays. As big corporations use your data for their good, questions arise on whether the privacy of these face recognition techniques is valid and legitimate.

FaceIO as a service follows all the privacy guidelines and gets user consent before requesting their camera access. Even if the developer wanted, FaceIO doesn't scan faces without getting consent. Users can easily opt-out of the system and can delete their facial data from the server.

FaceIO is CCP and GDPR compliant. As a developer, you can release this facial authentication system anywhere in the world without facing privacy issues. You can read this article to know more [about FaceIO privacy best practice](https://faceio.net/apps-best-practice).

## FaceIO Security

The security of a web application is an important topic to discuss and consider. As a developer, you are responsible for the security of a site or application's users.

FaceIO follows some important and serious security guidelines for user data protection. FaceIO hashes all the unique facial data of the user along with the payload we specified earlier. So the stored information is nothing but some random strings which can't be reverse engineered.

FaceIO outlines some very important [security guidelines](https://faceio.net/security-best-practice) for developers. Their security guide focuses on adding a strong pin code to protect user data. FaceIO also rejects covered faces so that no one can impersonate someone else.
