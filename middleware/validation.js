const yup = require("yup");
const validate = async (req, res, next) => {
    try {
        const schema = yup.object().shape({
            pseudo: yup.string().required(),
            content: yup.string().required(),
            likes: yup.number().required(),
        });
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(400).json({
            error: error.errors,
        });
    }
};
module.exports = validate;

