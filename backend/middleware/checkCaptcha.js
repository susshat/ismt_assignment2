const axios = require('axios').default;


const checkCaptcha = async (req, res, next)=>{
    try {
        const captcha  = req.body.captcha;

        if(!captcha)
        res.status(400).json({
            message: 'captcha is required'
        });

        const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=6LcXw8sgAAAAADk4VF5yMcpSrc2TgCaJOrao1jXe&response=${captcha}`, {}, {
headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
}

        }).then(res=>res.data);

        if(res.success!== true)
        res.status(400).json({
            message: 'Captcha innvalid'
        });
            console.log('correct')
        return next();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something went wrong'
        });
    }

};


module.exports = checkCaptcha;