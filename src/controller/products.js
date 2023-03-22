import Joi from "joi";
import product from "../model/products"
const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    status: Joi.boolean().required(),
    quality: Joi.number().required()
})

export const create = async (req, res) => {
    try {
        const body = req.body;
        const {error} = productSchema.validate(body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await product.create(body)
        if(data.length == 0){
            return res.status(200).json({
                message: "Them sp that bai"
            })
        }
        return res.json({
            message: "Them thanh cong",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const data = await product.find();
        if(!data){
            return res.status(200).json({
                message: "Khong co san pham"
            })
        }
        return res.json(
            data
        )
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const data = await product.findById(req.params.id);
        if(!data){
            return res.status(200).json({
                message: "Khong co san pham"
            })
        }
        return res.json(
            data
        )
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const remove = async (req, res) => {
    try {
        const data = await product.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(200).json({
                message: "Khong co san pham"
            })
        }
        return res.json({
            message: "Xoa thanh cong",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const update = async (req, res) => {
    try {
        const data = await product.findByIdAndUpdate({_id:req.params.id}, req.body, {
            new: true,
        });
        if(!data){
            return res.status(200).json({
                message: "sua that bai"
            })
        }
        return res.json({
            message: "Sua thanh cong",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}