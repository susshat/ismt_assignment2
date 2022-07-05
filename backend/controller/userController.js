
// import User,  }
//  from '../model/userModel';


// const bcrypt = require('bcrypt');
// const saltRounds = 14;



// export const createUser = [
//     async (req, res) =>{
//         try {
            
//             const user = req.body;
//             const existingUser = await User.findOne({
//                 username:user.username
//             });
//             if(existingUser){
//                 return res.status(400).json('User already exists');
//             }
//             const salt = bcrypt.genSaltSync(saltRounds);

//             const hasedPassword = bcrypt.hashSync(user.password, salt);
//             const addUser = new User({
//                 ...user,
//                 password:hasedPassword,
//             });

//             await addUser.save();
//             return res.status(201).json(addUser);
//         } catch (error) {
//             return res.status(500).json('internal server error');
//         }
//     }

// ];
// export const loginUser = [
//     async (req, res) =>{
//         try {
//             const user = await User.findOne({
//                 username: req.body.uername
//             })
// //for un registered user
//             if(!user){
//                 return res.status(404).json({
//                     status: 404,
//                     message: "User does not exists",
//                   });
//             };
// //for checking a valid password
//             const isPasswordValid = await bcrypt.verify(
//                 user.password,
//                 req.body.password
//             );
//             if (!isPasswordValid)
//             return res
//               .status(401)
//               .json({ status: 401, message: "Invalid Password" });

//               req.session.userId= user._id.toString();
//               res.json(user);

//         } catch (error) {
//             return res.status(500).json('internal server error');
//         }
//     }

// ];
// export const changePassword = [
//     async (req, res) =>{
//         try {
//             const oldPassword=  await bcrypt.verify(req.body.oldPassword,res.locals.user.password);

//             if(oldPassword){
//                 User.findOneAndUpdate({ _id:res.locals.user._id,},
//                     {password:req.body.newPassword})
//             }else{
//                 return res.status(400).json('Old password do-not match');
//             }

//         } catch (error) {
//             return res.status(500).json('internal server error'); 
//         }
//     }

// ];
// export const forgetPassword = [
//     async (req, res) =>{
//         try {
//             const user = await User.findOne({
//                 username: req.body.uername
//             })
//             if(user){
//                 const newUser = await User.findOneAndUpdate({ _id:res.locals.user._id,},
//                     {password:req.body.newPassword},
//                     {new:true}) 
//                   return res.json(newUser);
                 
//             }else{
//                 return res.status(400).json('Old password do-not match');
//             }

//         } catch (error) {
//             return res.status(500).json('internal server error');
//         }
//     }

// ];
// export const logOut = [
//     async (req, res) => {
//         req.session.destroy((error) => {
//           if (error) {
//             console.log(error);
//             return res.status(500).json({
//               status: 500,
//               message: "Something went wrong. Try Again!",
//             });
//           }
//           return res.status(200).send({ message: "Logged Out" });
//         });
//       },
//     ];

//     export const refresh = [
//         async(req,res) =>{
//             const profile =  res.locals.user
//             return res.json(profile) ;
//         }
//     ]


