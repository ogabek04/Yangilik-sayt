module.exports = class Container {
    constructor(model, request, response, next) {
        this.MODEL = model
        this.REQ = request
        this.RES = response
        this.NEXT = next
    }


    // Ma'lumot yaratish
    create_data() {
        const ModelSchema = this.MODEL
        const req = this.REQ
        const res = this.RES
        const next = this.NEXT
        const result = ModelSchema(req.body)
        result.save()
            .then(() => {
                return res.json({
                    data: result
                })
            })
            .catch((error) => {
                return res.json(error.message)
            })
    }
    // Hamma ma'lumotlarni olish
    async get_all() {
        const ModelSchema = this.MODEL
        const req = this.REQ
        const res = this.RES
        const next = this.NEXT
        await ModelSchema.find().exec((error, data) => {
            if (error) {
                res.json(error.message)
            }
            else {
                res.json(data)
            }
        })
    }
    // Hamma ma'lumotlarni olish
    async get_one() {
        const ModelSchema = this.MODEL
        const req = this.REQ
        const res = this.RES
        const next = this.NEXT

        const { id } = req.params;

        await ModelSchema.findById(id).exec((error, data) => {
            if (error) {
                res.json(error.message)
            }
            else {
                res.json(data)
            }
        })
    }
    // Faqat fayldan tashqari barcha elemtlarni update qilish
    async update_context() {
        const ModelSchema = this.MODEL
        const req = this.REQ
        const res = this.RES
        const next = this.NEXT
        await ModelSchema.findByIdAndUpdate({ _id: req.params.id })
            .exec(async (error, data) => {
                if (error) {
                    res.json(error.message)
                }
                else {
                    Object.assign(data, req.body)
                    await data.save()
                        .then(() => {
                            res.json(data)
                        })
                        .catch((error) => {
                           res.json(error)
                        })
                }
            })
    }
    // Faqat fayldan tashqari barcha elemtlarni delete qilish
    async delete_context() {
        const ModelSchema = this.MODEL
        const req = this.REQ
        const res = this.RES
        const next = this.NEXT
        await ModelSchema.findByIdAndDelete({ _id: req.params.id })
            .exec(async (error, data) => {
                if (error) {
                    res.json(error.message)
                }
                else {
                    res.json({
                        message: "Chopildi 🪓🪓🪓"
                    })
                }
            })
    }

}