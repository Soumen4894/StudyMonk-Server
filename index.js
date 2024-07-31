// const express = require("express");
// const app = express();

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");
// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const {cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");

// dotenv.config();
// const PORT = process.env.PORT || 4000;

// //database connect
// database.connect();
// //middlewares
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors({
//     origin:'http://localhost:3000/',
// 	//origin:'*', 
//     credentials:true,           
//     //optionSuccessStatus:200
// }));
// //app.use(cors());


// // app.use(function (req, res, next) {
// // 	res.header("Access-Control-Allow-Origin", "*");
// // 	res.header(
// // 	  "Access-Control-Allow-Headers",
// // 	  "Origin, X-Requested-With, Content-Type, Accept"
// // 	);
// // 	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// // 	res.header('Access-Control-Allow-Credentials', 'true');
// // 	next();
// // });

// app.get("/", (req, res) => {
// 	return res.json({
// 		success:true,
// 		message:'Your server is up and running....'
// 	});
// });

// app.use(
// 	fileUpload({
// 		useTempFiles:true,
// 		tempFileDir:"/tmp",
// 	})
// )
// //cloudinary connection
// cloudinaryConnect();

// //routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// //def route



// app.listen(PORT, () => {
// 	console.log(`App is running at ${PORT}`)
// })


//MONGODB_URL = "mongodb+srv://soumenmandal0008:root@cluster0.wx9xp.mongodb.net/"
// YXjNDwk6a4FR8PIa



const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload"); 
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
