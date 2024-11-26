const yup = require('yup')
async function validate(req,res,next){
try {
    // schema 
    const Schema = yup.object().shape({
        username: yup.string().required().matches(/^[A-Z][a-z]+$/, 'Username must start with an uppercase letter followed by lowercase letters'),
        email:yup.string().email().required()
        .matches(/^[a-zA-Z0-9._%+-]+@esprit\.tn$/, 'Email must be a valid format and end with @esprit.tn'),
      // .matches(/@esprit.tn$/, 'Email must end with @esprit'),

        cin:yup.number().required(),

    })
    await Schema.validate(req.body);
    next()
return res.status(200).send('valid');
} catch (error) {
    return res.status(500).json(error);
}
}

async function validateProduct(req,res,next){
    try {
        // schema 
        const Schema = yup.object().shape({
            name: yup.string().required().matches(/^[A-Z][a-z]+$/, 'Username must start with an uppercase letter followed by lowercase letters'),
            description:yup.string().required(),
          // .matches(/@esprit.tn$/, 'Email must end with @esprit'),
    
            status:yup.boolean().oneOf(true).required(),
    
        })
        await Schema.validate(req.body);
        next()
    return res.status(200).send('valid');
    } catch (error) {
        return res.status(500).json(error);
    }
    }

    module.exports = { validate, validateProduct };
